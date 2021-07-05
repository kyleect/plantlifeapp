<script context="module">
	export function load({ page }) {
		return {
			props: {
				id: parseInt(page.params.id, 10)
			}
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	import plants, { loadPlants } from '../../stores/plants.store';

	export let id;

	let plant = {};

	plants.subscribe((value) => {
		plant = value.find((p) => p.id === id);
	});

	async function onClickDelete(e) {
		e.preventDefault();

		const res = await fetch(`/api/plants/${id}`, {
			method: 'DELETE'
		});

		if (res.ok) {
			await loadPlants(fetch);
			await goto('/');
		}
	}
</script>

<h2>Plant</h2>

<p>{plant?.name}</p>

<button on:click={onClickDelete}>Delete</button>
