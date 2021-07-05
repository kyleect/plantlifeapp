<script context="module">
	import { loadPlants } from '../stores/plants.store';

	export async function load({ fetch }) {
		await loadPlants(fetch);

		return {};
	}
</script>

<h1>Plant Life</h1>
<slot />
