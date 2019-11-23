<template>
    <v-ons-page class="structure">
        <Header :title="'Структура работы ресторана'"></Header>
        <MainStructure></MainStructure>
    </v-ons-page>
</template>

<script>
    import Header from "../components/StructurePage/Header";
    import MainStructure from "../components/StructurePage/MainStructure";
    export default {
        name: "Structure",
        components: {MainStructure, Header}
    }
</script>

<style scoped>

</style>