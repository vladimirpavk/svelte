<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function sayHello(){
        console.log('Message dispatched');
        dispatch('message',{
            value: 'Hello message'
        })
    }

    function sayHi(){
        dispatch('poruka',{
            vrednost: 'Hi'
        });
    }

</script>

<style>
</style>

<p>
    <button on:click={sayHello}>Say Hello</button>
    <button on:click={sayHi}>Say Hi</button>
</p>