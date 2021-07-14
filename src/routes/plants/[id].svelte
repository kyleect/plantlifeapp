<script>
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import plants, { deletePlant, waterPlant } from '../../stores/plants.store';
	import PlantForm from '../../components/PlantForm.svelte';
	import WaterPlantButton from '../../components/WaterPlantButton.svelte';
	import kinds from '../../stores/kinds.store';

	const id = parseInt($page.params.id, 10);

	const plant = derived(plants, ($plants) => $plants.find((p) => p.id === id));
	const kind = derived([kinds, plant], ([$kinds, $plant]) => $kinds.find(kind => kind.id === $plant?.kindId));

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

<h2>Plant</h2>

<p>{$plant?.name}</p>

<p>Last Watered: {$plant?.wateredAt ? new Date($plant.wateredAt) : 'Unknown'}</p>

<WaterPlantButton plantId={id} />

<p>Spring Schedule: Every {$kind?.springSchedule} day/s</p>
<p>Summer Schedule: Every {$kind?.summerSchedule} day/s</p>
<p>Fall Schedule: Every {$kind?.fallSchedule} day/s</p>
<p>Winter Schedule: Every {$kind?.winterSchedule} day/s</p>

<button on:click|preventDefault={onClickEdit}>{editing ? 'Cancel' : 'Edit'}</button>
<button on:click|preventDefault={onClickDelete}>Delete</button>

{#if editing}
	<h3>Update</h3>

	<PlantForm {id} onSubmit={onEditSubmit} />
{/if}
