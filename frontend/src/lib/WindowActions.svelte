<script lang="ts">
    import { onMount } from 'svelte';
    import { Quit, WindowIsMaximised, WindowToggleMaximise, WindowMinimise } from '../../wailsjs/runtime/runtime.js';
    import closeIcon from "../assets/icons/close.svg";
    import Fullscreen  from "./customIcons/Fullscreen.svelte";
    import NotFullscreen  from "./customIcons/NotFullscreen.svelte";
    import Dash from './customIcons/Dash.svelte';
    import { windowsIsMinimised } from './store.js';

    function changeMaximiseButton() {
        setTimeout(() => {
            WindowIsMaximised().then((data) => {
                $windowsIsMinimised = !data;
            });
        }, 10);
    }

    onMount(() => {
        changeMaximiseButton();
    });
</script>

<section>
    <button class="windowActionButton" on:click={WindowMinimise} title="Minimise">
        <Dash />
    </button>
    <button class="windowActionButton" on:click={() => {WindowToggleMaximise();changeMaximiseButton();}}>
        {#if $windowsIsMinimised}
            <Fullscreen />
        {:else}
            <NotFullscreen />
        {/if}
    </button>
    <button class="windowActionButton red" on:click={Quit} title="Close">
        <img src={closeIcon} alt="Close Window" />
    </button>
</section>

<style>
    section {
        display: flex;
    }

    .windowActionButton {
        width: 46px;
        height: 100%;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 2px;
        transition: background-color 0.1s linear;
    }

    .windowActionButton.red:hover {
        background-color: #ff0000;
    }

    .windowActionButton:hover {
        background-color: #80808050;
    }

    .windowActionButton img {
        width: 20px;
        filter: invert(0.6);
        transition: filter 0.1s linear;
    }

    .windowActionButton.red:hover img {
        filter: invert(1);
    }

</style>