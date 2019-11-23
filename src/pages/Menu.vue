<template>
    <v-ons-page class="menu">
        <Header></Header>
        <MainMenu></MainMenu>
    </v-ons-page>
</template>

<script>
    import Header from "../components/MenuPage/Header";
    import MainMenu from "../components/MenuPage/MainMenu";

    export default {
        name: "Menu",
        components: {MainMenu, Header}
    }
</script>

<style scoped>

</style>