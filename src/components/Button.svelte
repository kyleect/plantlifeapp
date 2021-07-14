<script>
	export let onClick = null;

	function onClickButton(e) {
		if (onClick) {
			onClick(e);
		}
	}
</script>

<button on:click={onClickButton} class="p-2 bg-pink-500 text-white"><slot /></button>
