<template>
    <v-ons-page class="test">
        <Header></Header>
        <MainTest></MainTest>
    </v-ons-page>
</template>

<script>
    import Header from "../components/Test/Header";
    import MainTest from "../components/Test/MainTest";
    export default {
        name: "Test",
        components: {MainTest, Header}
    }
</script>

<style scoped>

</style>