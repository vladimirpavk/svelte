<script>
	import Nested from './Nested.svelte';

	import { onLoaded1 } from './utils.js';

	let counter=0;

	onLoaded1(
		()=>console.log('Component did mount')
	);

	function buttonClicked(){
		counter++;
	}

	let user = { loggedIn: false };

	function toggleUser(){
		user.loggedIn=!user.loggedIn;
	}

	let array1=[
		{
			name:'Vladimir',
			lastname:'Pavkovic'
		},
		{
			name:'Pavle',
			lastname:'Pavkovic'
		},
		{
			name:'Nataša',
			lastname:'Pavkovic'
		}
	];

	function messageRecieved(msg){
		console.log(msg.detail.value);
	}

	function porukaRecieved(poruka){
		console.log(poruka.detail.vrednost);
	}

	let inputValue='';

</script>

<style>
	h1 {
	  color: purple;
	}
</style>

<ul>
	{#each array1 as elementNiza}
		<p>{elementNiza.name} <strong>{elementNiza.lastname}</strong></p>
	{/each}
</ul>

<Nested on:message={messageRecieved} on:poruka={porukaRecieved}/>

<input bind:value={inputValue}/>
<p>{inputValue}</p>

