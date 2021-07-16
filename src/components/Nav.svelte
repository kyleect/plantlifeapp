<script>
	import { page } from '$app/stores';
	import plants, { wateringPlantIds } from '../stores/plants.store';
</script>

<nav class="border-b-2">
	<ul class="w-full inline-flex justify-around text-center">
		<li class="w-full">
			<a href="/" class={`block p-5 hover:bg-gray-200 ${$page.path === '/' ? 'active' : ''}`}
				>Home</a
			>
		</li>
		<li class="w-full">
			<a
				href="/plants"
				class={`block p-5 hover:bg-gray-200 ${$page.path === '/plants' ? 'active' : ''}`}
				>Plants ({$plants.length})</a
			>
		</li>
		<li class="w-full">
			<a
				href="/watering"
				class={`block p-5 hover:bg-gray-200 ${$page.path === '/watering' ? 'active' : ''}`}
				>Watering ({$wateringPlantIds.length})</a
			>
		</li>
	</ul>
</nav>

<style>
	.active {
		font-weight: bold;
	}
</style>
