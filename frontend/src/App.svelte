<script lang="ts">
	import { Greet } from '../wailsjs/go/main/App.js';
    import Header from './lib/Header.svelte';
    import { devMode } from './lib/store.js';

	let resultText: string = "Please enter your name below 👇";
	let name: string;

	function greet(): void {
		Greet(name).then(result => resultText = result);
	}

	function pressedKey(event: KeyboardEvent) {
		if (event.ctrlKey) {
			//ctrl was held down during the click
			if (event.code === "KeyD") {
				devMode.update((prev) => !prev);
			}
		}
	}
</script>

<svelte:window on:keypress={pressedKey}/>

<main>
	<Header />
	<p>Testingt</p>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
	}
</style>
