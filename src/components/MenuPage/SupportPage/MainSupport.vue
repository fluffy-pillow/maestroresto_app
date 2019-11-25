<template>
    <main class="main-support">
        <Room></Room>
    </main>
</template>

<script>
    import Room from "../../Chat/Room";
    export default {
        name: "MainSupport",
        components: {Room}
    }
</script>

<style scoped>
    .main-support {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
        height: calc(100% - 44px - env(safe-area-inset-top));
    }

</style>