<template>
    <v-ons-page class="main-menu">
        <StickyHeader :title="'Основное меню'"></StickyHeader>
        <MainMainMenu></MainMainMenu>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/StickyHeader";
    import MainMainMenu from "../../components/FavoritePage/MainMenuPage/MainMainMenu";
    export default {
        name: "MainMenu",
        components: {MainMainMenu, StickyHeader}
    }
</script>

<style scoped>

</style>