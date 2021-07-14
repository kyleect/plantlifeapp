<script>
	import { page } from '$app/stores';
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
				class={`block p-5 hover:bg-gray-200 ${$page.path === '/plants' ? 'active' : ''}`}>Plants</a
			>
		</li>
		<li class="w-full">
			<a
				href="/watering"
				class={`block p-5 hover:bg-gray-200 ${$page.path === '/watering' ? 'active' : ''}`}
				>Watering</a
			>
		</li>
	</ul>
</nav>

<style>
	.active {
		font-weight: bold;
	}
</style>
