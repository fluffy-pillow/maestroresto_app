<template>
    <v-ons-page class="structure" @show="onShowPage">
        <Header :title="'Структура работы ресторана'"></Header>
        <MainStructure></MainStructure>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../components/StructurePage/Header";
    import MainStructure from "../components/StructurePage/MainStructure";
    export default {
        name: "Structure",
        components: {MainStructure, Header},
        methods: {
            onShowPage () {
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show'
            })
        }
    }
</script>

<style scoped>

</style>