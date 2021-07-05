<script context="module">
	export async function load({ page, fetch }) {
		const plant = await loadPlant(fetch, page.params.id);

		if (plant) {
			return {
				props: { plant }
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
	export let plant;
</script>

<h1>Plants {plant.name}</h1>

<p>{plant.schedule}</p>
