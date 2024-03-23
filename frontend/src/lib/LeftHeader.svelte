<script lang="ts">
    import vscodelogo from "../assets/images/vscode.webp";
    import HeaderDropdowns from "./headerdropdowns/HeaderDropdowns.svelte";
</script>

<section>
    <img src={vscodelogo} alt="Logo" />
    <HeaderDropdowns />
</section>

<style>
    section {
        height: 100%;
        padding: 9px 9px 9px 10px;
        display: flex;
        gap: 10px;
    }

    img {
        height: 100%;
    }
</style>