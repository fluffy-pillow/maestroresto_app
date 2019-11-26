<template>
    <v-ons-page class="support">
        <Header></Header>
        <MainSupport></MainSupport>
    </v-ons-page>
</template>

<script>
    import Header from "../components/MenuPage/SupportPage/Header";
    import MainSupport from "../components/MenuPage/SupportPage/MainSupport";
    export default {
        name: "Support",
        components: {MainSupport, Header}
    }
</script>

<style scoped>

</style>