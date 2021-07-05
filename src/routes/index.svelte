<script context="module">
	export async function load({ fetch }) {
		const plants = await loadPlants(fetch);

		if (plants) {
			return {
				props: { plants }
			};
		}
	}
</script>

<script>
	export let plants = [];

	let name;
	let schedule;

	async function onSubmit(e) {
		e.preventDefault();

		await fetch('/plants', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, schedule })
		}).then((res) => res.json());

		name = '';
		schedule = '';

		plants = (await loadPlants(fetch)) ?? [];
	}

	async function loadPlants(fetch) {
		const url = `/plants`;
		const res = await fetch(url);

		if (res.ok) {
			return await res.json();
		}
	}
</script>

<h1>Plants {plants.length}</h1>

<form on:submit={onSubmit}>
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

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Schedule</th>
		</tr>
	</thead>
	<tbody>
		{#each plants as plant}
			<tr>
				<td><a href={`/plants/${plant.id}`}>{plant.name}</a></td>
				<td>{plant.schedule}</td>
			</tr>
		{/each}
	</tbody>
</table>
