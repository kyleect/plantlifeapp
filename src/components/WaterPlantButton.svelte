<script>
	import { waterPlant } from '../stores/plants.store';
	import Button from './Button.svelte';

	export let plantId;

	function onClick(e) {
		e.preventDefault();
		waterPlant(plantId);
	}
</script>

<Button {onClick}>Water</Button>
