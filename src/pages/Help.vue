<template>
    <v-ons-page class="help">
        <Header></Header>
        <MainHelp></MainHelp>
    </v-ons-page>
</template>

<script>
    import Header from "../components/MenuPage/HelpPage/Header";
    import MainHelp from "../components/MenuPage/HelpPage/MainHelp";
    export default {
        name: "Help",
        components: {MainHelp, Header}
    }
</script>

<style scoped>

</style>