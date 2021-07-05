<script context="module">
	async function loadPlant(fetch, id) {
		const url = `/plants/${id}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return await res.json();
		}
	}

	export async function load({ page, fetch }) {
		const plant = await loadPlant(fetch, page.params.id);

		if (plant) {
			return {
				props: { plant }
			};
		}
	}
</script>

<script>
	export let plant;
</script>

<h1>Plants {plant.name}</h1>

<p>{plant.schedule}</p>
