<script>
	import { wateringPlants } from '../stores/plants.store';
	import WaterPlantButton from '../components/WaterPlantButton.svelte';
</script>

{#if $wateringPlants.length > 0}
	<ul>
		{#each $wateringPlants as plant}
			<li class="flex justify-between ">
				<a class="block p-2 w-full border-b-2 hover:bg-gray-50" href={`/plants/${plant.id}`}
					>{plant.name}</a
				>
				<WaterPlantButton plantId={plant.id} />
			</li>
		{/each}
	</ul>
{/if}
