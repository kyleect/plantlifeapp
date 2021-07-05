<script context="module">
	import { loadPlants } from '../stores/plants.store';

	export async function load({ fetch }) {
		await loadPlants(fetch);

		return {};
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';
</script>

<Nav />

<h1>Plant Life</h1>

<slot />
