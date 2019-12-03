<template>
    <v-ons-page class="favorite">
        <StickyHeader :title="'Избранное'"></StickyHeader>
        <main>
            <Favorite></Favorite>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import Favorite from "../components/Categories/Favorite/Extended/Favorite";

    export default {
        name: "Favorite",
        components: {StickyHeader, Favorite},
    }
</script>

<style scoped>
    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 81px;
    }
</style>