<template>
    <v-ons-page class="main-menu">
        <Header :title="'Основное меню'"></Header>
        <MainMainMenu></MainMainMenu>
    </v-ons-page>
</template>

<script>
    import Header from "@/components/Favorite/Header";
    import MainMainMenu from "../../components/Favorite/MainMenu/MainMainMenu";
    export default {
        name: "MainMenu",
        components: {MainMainMenu, Header}
    }
</script>

<style scoped>

</style>