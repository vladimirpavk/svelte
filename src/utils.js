import { onMount } from 'svelte';

export function onLoaded1(callBackFn){
    onMount(
        callBackFn
    );
}