<script>
	import { goto } from '$app/navigation';
	import PlantForm from '../../components/PlantForm.svelte';

	function onSubmit() {
		goto('/');
	}
</script>

<h2>Add Plant</h2>

<PlantForm {onSubmit} />
