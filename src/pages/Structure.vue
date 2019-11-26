<template>
    <v-ons-page class="structure">
        <StickyHeader :title="'Структура работы ресторана'"></StickyHeader>
        <MainStructure></MainStructure>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import MainStructure from "../components/StructurePage/MainStructure";
    export default {
        name: "Structure",
        components: {MainStructure, StickyHeader}
    }
</script>

<style scoped>

</style>