<script lang="ts">
    import Edit from "./Edit.svelte";
    import File from "./File.svelte";
</script>

<section>
    <button>File</button>
    <button>Edit</button>
    <button>Selection</button>
    <button>View</button>
    <button>Go</button>
    <button>Run</button>
    <button>Terminal</button>
    <button>Help</button>
</section>

<style>
    section {
        display: flex;
    }

    button {
        background: none;
        color: rgb(187, 187, 187);
        border: none;
        height: calc(100% - 2px);
        margin-top: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
    }
</style>