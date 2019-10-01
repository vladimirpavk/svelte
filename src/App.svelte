<script>
	import Nested from './Nested.svelte';

	let counter=0;

	function buttonClicked(){
		counter++;
	}
</script>

<style>
	h1 {
	  color: purple;
	}
</style>

<h1>Hello {counter}!</h1>
<button on:click={ buttonClicked }>Count</button>

<Nested mojeIme="Vladimi"/>
