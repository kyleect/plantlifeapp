<script>
	import {wateringPlants} from '../stores/plants.store';
	import WaterPlantButton from '../components/WaterPlantButton.svelte';
</script>

<h2>Watering</h2>

{#if $wateringPlants.length > 0}
	<ul>
		{#each $wateringPlants as plant}
			<li>
				<td><a href={`/plants/${plant.id}`}>{plant.name}</a> <WaterPlantButton plantId={plant.id}/></td>
			</li>
		{/each}
	</ul>
{/if}
