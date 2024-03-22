<script lang="ts">
    import { WindowIsMaximised, WindowUnmaximise, WindowToggleMaximise } from '../../wailsjs/runtime/runtime.js';
    import WindowActions from './WindowActions.svelte';
    import { windowsIsMinimised } from './store.js';

    let md = false;
    let resiser: HTMLDivElement;

    function mouseMoving() {
        if (!md) return;

        WindowIsMaximised().then((data) => {
            if (data) {
                $windowsIsMinimised = false;
                WindowUnmaximise();
            }
            $windowsIsMinimised = true;
            md=false;
        });
    }

    function changeMaximiseButton() {
        setTimeout(() => {
            WindowIsMaximised().then((data) => {
                $windowsIsMinimised = !data;
            });
        }, 10);
    }

</script>

<section>
    <div bind:this={resiser} class="resiser" style="--wails-draggable:drag" on:dblclick={() => {WindowToggleMaximise();md=false;changeMaximiseButton()}} on:mousemove={mouseMoving} on:mousedown={() => md=true} />
    <WindowActions />
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
</style>