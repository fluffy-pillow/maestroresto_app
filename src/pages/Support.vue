<template>
    <v-ons-page class="support">
        <Header :title="'Написать в техподдержку'"></Header>
        <MainSupport></MainSupport>
    </v-ons-page>
</template>

<script>
    import Header from "../components/Header";
    import MainSupport from "../components/MenuPage/SupportPage/MainSupport";
    export default {
        name: "Support",
        components: {MainSupport, Header}
    }
</script>

<style scoped>

</style>