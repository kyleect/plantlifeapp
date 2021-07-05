<script context="module">
	export async function load({ page, fetch }) {
		const plant = await loadPlant(fetch, page.params.id);

		if (plant) {
			return {
				props: { plant, id: page.params.id }
			};
		}
	}

	async function loadPlant(fetch, id) {
		const url = `/plants/${id}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return await res.json();
		}
	}
</script>

<script>
	import { goto } from '$app/navigation';

	export let plant;
	export let id;

	async function onClickDelete(e) {
		e.preventDefault();

		await fetch(`/plants/${id}.json`, {
			method: 'DELETE'
		});

		goto('/');
	}
</script>

<h1>Plants {plant.name}</h1>

<p>{plant.schedule}</p>

<button on:click={onClickDelete}>Delete</button>
