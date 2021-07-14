<script>
    import { waterPlant } from '../stores/plants.store';
    export let plantId;

    function onClick() {
        waterPlant(plantId);
    }
</script>

<button on:click|preventDefault={onClick}>Water</button>