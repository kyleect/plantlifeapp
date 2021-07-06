<script>
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import plants, { deletePlant } from '../../stores/plants.store';
	import PlantForm from '../../components/PlantForm.svelte';

	const id = parseInt($page.params.id, 10);

	const plant = derived(plants, ($plants) => $plants.find((p) => p.id === id));

	async function onClickDelete() {
		await deletePlant(id);
		await goto('/');
	}
</script>

<h2>Plant</h2>

<p>{$plant?.name}</p>

<button on:click|preventDefault={onClickDelete}>Delete</button>

<h3>Update</h3>

<PlantForm {id} />
