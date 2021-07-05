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

<h3>Add</h3>

<form on:submit|preventDefault={onSubmit}>
	<div>
		<label for="name">Name</label><br />
		<input type="text" name="name" id="name" bind:value={name} required />
	</div>
	<br />
	<div>
		<label for="schedule">Schedule</label><br />
		<input type="text" name="schedule" id="schedule" bind:value={schedule} required />
	</div>
	<br />
	<button>Add</button>
</form>

{#if $plants.length > 0}
	<h3>Existing</h3>

	<ul>
		<tbody>
			{#each $plants as plant}
				<li>
					<td><a href={`/plants/${plant.id}`}>{plant.name}</a></td>
				</li>
			{/each}
		</tbody>
	</ul>
{/if}
