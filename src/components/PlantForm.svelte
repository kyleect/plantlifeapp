<script lang="ts">
	import plants, { createPlant, updatePlant } from '../stores/plants.store';

	export let id: number = null;

	const plant = $plants.find((p) => p.id === id);

	export let onSubmit = null;

	let name;
	let schedule;

	if (plant) {
		name = plant.name;
		schedule = plant.schedule;
	}

	async function onFormSubmit() {
		if (id) {
			updatePlant(id, name, schedule);
		} else {
			createPlant(name, schedule);
		}

		onSubmit?.call(null);

		name = '';
		schedule = '';
	}
</script>

<form on:submit|preventDefault={onFormSubmit}>
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
	<button>{id ? 'Save' : 'Add'}</button>
</form>
