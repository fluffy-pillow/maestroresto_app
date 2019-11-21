<template>
    <v-ons-page class="main-menu" @show="onShowPage">
        <Header :title="'Основное меню'"></Header>
        <MainMainMenu></MainMainMenu>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "@/components/FavoritePage/Header";
    import MainMainMenu from "../../components/FavoritePage/MainMenuPage/MainMainMenu";
    export default {
        name: "MainMenu",
        components: {MainMainMenu, Header},
        methods: {
            onShowPage () {
                this.hideFooter()
            },
            ...mapActions({
                hideFooter: 'footer/hide'
            })
        }
    }
</script>

<style scoped>

</style>