<script>
	import { createPlant } from '../stores/plants.store';

	let name;
	let schedule;

	async function onSubmit() {
		createPlant(name, schedule);

		name = '';
		schedule = '';
	}
</script>

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
