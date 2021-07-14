<script>
	import { goto } from '$app/navigation';

	import Button from '../../components/Button.svelte';
	import plants from '../../stores/plants.store';
</script>

<Button onClick={() => goto('/plants/add')}>Add Plant</Button>

{#if $plants.length > 0}
	<ul>
		{#each $plants as plant}
			<li>
				<a class="block p-2 border-b-2 hover:bg-gray-50" href={`/plants/${plant.id}`}
					>{plant.name}</a
				>
			</li>
		{/each}
	</ul>
{/if}
