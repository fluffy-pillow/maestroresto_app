<template>
    <v-ons-page class="help">
        <Header :title="'Помощь'"></Header>
        <MainHelp></MainHelp>
    </v-ons-page>
</template>

<script>
    import Header from "../components/Header";
    import MainHelp from "../components/MenuPage/HelpPage/MainHelp";
    export default {
        name: "Help",
        components: {MainHelp, Header}
    }
</script>

<style scoped>

</style>