<script lang="ts">
	import plants, { createPlant, updatePlant } from '../stores/plants.store';
	import kinds from '../stores/kinds.store';
	import Button from '../components/Button.svelte';

	export let id: number = null;

	const plant = $plants.find((p) => p.id === id);

	export let onSubmit = null;

	let name;
	let kindId = $kinds[0].id;
	let wateredAt = Date.now();

	if (plant) {
		name = plant.name;
		wateredAt = plant.wateredAt;

		const kind = $kinds.find((k) => k.id === plant.kindId);
		kindId = kind.id;
	}

	async function onFormSubmit() {
		if (id) {
			updatePlant(id, name, new Date(wateredAt).valueOf(), kindId);
		} else {
			createPlant(name, new Date(wateredAt).valueOf(), kindId);
		}

		onSubmit?.call(null);

		name = '';
		kindId = $kinds[0].id;
		wateredAt = Date.now();
	}
</script>

<form on:submit|preventDefault={onFormSubmit}>
	<div>
		<label for="name" class="font-bold">Name</label><br />
		<input
			type="text"
			name="name"
			id="name"
			bind:value={name}
			required
			class="p-2 border-2 w-full"
		/>
	</div>
	<div>
		<label for="kind" class="font-bold">Kind</label><br />
		<select
			name="kind"
			id="kind"
			required
			value={kindId}
			on:blur={(e) => {
				kindId = e.target.value;
			}}
			class="p-2 border-2 w-full"
		>
			{#each $kinds as kind}
				<option value={kind.id}>{kind.name}</option>
			{/each}
		</select>
	</div>
	{#if !plant}
		<div>
			<label for="wateredAt" class="font-bold">Last Watered</label><br />
			<input
				type="datetime-local"
				value={new Date(wateredAt).toISOString().substring(0, 16)}
				on:change={(e) => (wateredAt = new Date(wateredAt).valueOf())}
				class="p-2 border-2 w-full"
			/>
		</div>
	{/if}
	<Button>{id ? 'Save' : 'Add'}</Button>
</form>
