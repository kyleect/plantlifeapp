<script>
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import plants, { deletePlant, waterPlant } from '../../stores/plants.store';
	import PlantForm from '../../components/PlantForm.svelte';
	import WaterPlantButton from '../../components/WaterPlantButton.svelte';
	import kinds from '../../stores/kinds.store';
	import Button from '../../components/Button.svelte';

	const id = parseInt($page.params.id, 10);

	const plant = derived(plants, ($plants) => $plants.find((p) => p.id === id));
	const kind = derived([kinds, plant], ([$kinds, $plant]) =>
		$kinds.find((kind) => kind.id === $plant?.kindId)
	);

	async function onClickDelete() {
		await deletePlant(id);
		await goto('/plants');
	}

	async function onClickEdit() {
		editing = !editing;
	}

	async function onEditSubmit() {
		editing = false;
	}

	async function onClickWater() {
		await waterPlant(id);
	}

	let editing = false;
</script>

<table class="w-full">
	<tbody>
		<tr>
			<th>Name</th>
			<td>{$plant?.name}</td>
		</tr>
		<tr>
			<th>Last Watered</th>
			<td>{$plant?.wateredAt ? new Date($plant.wateredAt) : 'Unknown'} </td>
		</tr>
		<tr>
			<th>Schedules</th>
			<td>
				<table>
					<tbody>
						<tr>
							<th>Spring</th>
							<td>Every {$kind?.springSchedule} day/s</td>
						</tr>
						<tr>
							<th>Summer</th>
							<td>Every {$kind?.summerSchedule} day/s</td>
						</tr>
						<tr>
							<th>Fall</th>
							<td>Every {$kind?.fallSchedule} day/s</td>
						</tr>
						<tr>
							<th>Winter</th>
							<td>Every {$kind?.winterSchedule} day/s</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>

<WaterPlantButton plantId={id} />
<Button onClick={onClickEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
<Button onClick={onClickDelete}>Delete</Button>

{#if editing}
	<PlantForm {id} onSubmit={onEditSubmit} />
{/if}
