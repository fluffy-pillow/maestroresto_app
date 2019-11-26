<template>
    <v-ons-page class="main-menu">
        <Header :title="'Основное меню'"></Header>
        <MainMainMenu></MainMainMenu>
    </v-ons-page>
</template>

<script>
    import Header from "@/components/Header";
    import MainMainMenu from "../../components/FavoritePage/MainMenuPage/MainMainMenu";
    export default {
        name: "MainMenu",
        components: {MainMainMenu, Header}
    }
</script>

<style scoped>

</style>