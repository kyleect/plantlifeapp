<script lang="ts">
	import plants, { createPlant, updatePlant } from '../stores/plants.store';
	import kinds from '../stores/kinds.store';

	export let id: number = null;

	const plant = $plants.find((p) => p.id === id);

	export let onSubmit = null;

	let name;
	let kindId = $kinds[0].id;

	if (plant) {
		name = plant.name;
		const kind = $kinds.find((k) => k.id === plant.kindId);
		kindId = kind.id;
	}

	async function onFormSubmit() {
		if (id) {
			updatePlant(id, name, kindId);
		} else {
			createPlant(name, kindId);
		}

		onSubmit?.call(null);

		name = '';
		kindId = $kinds[0].id;
	}
</script>

<form on:submit|preventDefault={onFormSubmit}>
	<div>
		<label for="name">Name</label><br />
		<input type="text" name="name" id="name" bind:value={name} required />
	</div>
	<br />
	<div>
		<label for="kind">Kind</label><br />
		<select
			name="kind"
			id="kind"
			required
			value={kindId}
			on:blur={(e) => {
				kindId = e.target.value;
			}}
		>
			{#each $kinds as kind}
				<option value={kind.id}>{kind.name}</option>
			{/each}
		</select>
	</div>
	<br />
	<button>{id ? 'Save' : 'Add'}</button>
</form>
