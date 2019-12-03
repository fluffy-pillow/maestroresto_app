<template>
    <v-ons-page class="structure">
        <StickyHeader :title="'Структура работы ресторана'"></StickyHeader>
        <main>
            <Structure :show-head="false" :show-more-button="false"></Structure>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import Structure from "../components/Lists/Structure/Structure";
    export default {
        name: "Structure",
        components: {StickyHeader, Structure}
    }
</script>

<style scoped>
    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
    }
</style>