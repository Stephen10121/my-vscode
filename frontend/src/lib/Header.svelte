<script lang="ts">
    import { onMount } from 'svelte';
    import { Quit, WindowIsMaximised, WindowUnmaximise, WindowToggleMaximise } from '../../wailsjs/runtime/runtime.js';
    import closeIcon from "../assets/icons/close.svg";
    import Fullscreen  from "./customIcons/Fullscreen.svelte";
    import NotFullscreen  from "./customIcons/NotFullscreen.svelte";
    import { Fun } from "../../wailsjs/go/main/App.js";
    import Dash from './customIcons/Dash.svelte';

    let md = false;
    let resiser: HTMLDivElement;
    let windowsIsMinimised = true;

    function changeMaximiseButton() {
        setTimeout(() => {
            WindowIsMaximised().then((data) => {
                windowsIsMinimised = !data;
            });
        }, 10);
    }

    function mouseMoving() {
        if (!md) return;

        WindowIsMaximised().then((data) => {
            if (data) {
                windowsIsMinimised = false;
                WindowUnmaximise();
            }
            windowsIsMinimised = true;
            md=false;
        });
    }


    onMount(() => {
        changeMaximiseButton();
    });
</script>

<section>
    <div bind:this={resiser} class="resiser" style="--wails-draggable:drag" on:dblclick={() => {WindowToggleMaximise();md=false;changeMaximiseButton()}} on:mousemove={mouseMoving} on:mousedown={() => md=true} />
    <button class="windowActionButton" on:click={Fun} title="Close">
        <Dash />
    </button>
    <button class="windowActionButton" on:click={() => {WindowToggleMaximise();changeMaximiseButton();}} title="Close">
        {#if windowsIsMinimised}
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
        background-color: #090b10;
        width: 100%;
        height: 35px;
        border-bottom: 1px solid #1e212d;
        position: relative;
        isolation: isolate;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .resiser {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        -webkit-user-select: auto !important; /* Safari */        
        -moz-user-select: auto !important; /* Firefox */
        -ms-user-select: auto !important; /* IE10+/Edge */
        user-select: auto !important;
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