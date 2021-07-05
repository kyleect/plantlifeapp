<script>
	import plants, { loadPlants } from '../stores/plants.store';

	let name;
	let schedule;

	async function onSubmit() {
		await fetch('/api/plants', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, schedule })
		});

		name = '';
		schedule = '';

		await loadPlants(fetch);
	}
</script>

<h2>Plants</h2>

<form on:submit|preventDefault={onSubmit}>
	<div>
		<label for="name">Name</label>
		<input type="text" name="name" bind:value={name} required />
	</div>
	<div>
		<label for="schedule">Schedule</label>
		<input type="text" name="schedule" bind:value={schedule} required />
	</div>
	<button>Add</button>
</form>

{#if $plants.length > 0}
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Schedule</th>
			</tr>
		</thead>
		<tbody>
			{#each $plants as plant}
				<tr>
					<td><a href={`/plants/${plant.id}`}>{plant.name}</a></td>
					<td>{plant.schedule}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
