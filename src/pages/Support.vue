<template>
    <v-ons-page class="support">
        <StickyHeader :title="'Написать в техподдержку'"></StickyHeader>
        <main>
            <Room></Room>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";;
    import Room from "../components/Chat/Room";
    export default {
        name: "Support",
        components: {Room, StickyHeader}
    }
</script>

<style scoped>
    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        height: calc(100% - 44px - env(safe-area-inset-top));
    }
</style>