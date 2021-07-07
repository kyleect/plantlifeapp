<script>
	import plants from '../stores/plants.store';
	import PlantForm from '../components/PlantForm.svelte';
</script>

<h2>Plants</h2>

{#if $plants.length > 0}
	<h3>Existing</h3>

	<ul>
		{#each $plants as plant}
			<li>
				<td><a href={`/plants/${plant.id}`}>{plant.name}</a></td>
			</li>
		{/each}
	</ul>
{/if}
