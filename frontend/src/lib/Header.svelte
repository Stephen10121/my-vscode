<script lang="ts">
    import { Quit, WindowIsMaximised, WindowMaximise, WindowUnmaximise, WindowToggleMaximise } from '../../wailsjs/runtime/runtime.js';
    import { BrowserOpenURL } from "../../wailsjs/runtime/runtime.js";
    import closeIcon from "../assets/icons/close.svg";

    let md = false;

    function mouseMoving(event: MouseEvent) {
        if (!md) return;
        WindowIsMaximised().then((data) => {
            if (data) {
                WindowUnmaximise();
                md=false;
            }
        });
    }
</script>

<svelte:window on:mouseup={() => md=false} />

<section>
    <div class="resiser" style="--wails-draggable:drag" on:dblclick={WindowToggleMaximise} on:mousemove={mouseMoving} on:mousedown={() => md=true} />
    <button class="closeButton" on:click={WindowToggleMaximise} title="Close">
        fs
    </button>
    <button class="closeButton" on:click={Quit} title="Close">
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
    }

    .closeButton {
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

    .closeButton:hover {
        background-color: red;
    }

    .closeButton img {
        width: 20px;
        filter: invert(0.4);
        transition: filter 0.1s linear;
    }

    .closeButton:hover img {
        filter: invert(1);
    }

</style>