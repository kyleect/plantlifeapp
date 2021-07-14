<script>
	import plants from '../../stores/plants.store';
</script>

{#if $plants.length > 0}
	<ul>
		<li class="border-b-2"><a class="block p-2" href="/plants/add">Add Plant</a></li>
		{#each $plants as plant}
			<li class="border-b-2">
				<a class="block p-2" href={`/plants/${plant.id}`}>{plant.name}</a>
			</li>
		{/each}
	</ul>
{/if}
