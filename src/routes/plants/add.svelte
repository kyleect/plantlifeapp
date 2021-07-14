<script>
	import { goto } from '$app/navigation';
	import PlantForm from '../../components/PlantForm.svelte';

	function onSubmit() {
		goto('/plants');
	}
</script>

<PlantForm {onSubmit} />
