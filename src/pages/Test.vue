<template>
    <v-ons-page class="test" ref="test">
        <Header></Header>
        <MainTest></MainTest>
    </v-ons-page>
</template>

<script>
    import Header from "../components/TestPage/Header";
    import MainTest from "../components/TestPage/MainTest";
    export default {
        name: "Test",
        components: {MainTest, Header}
    }
</script>

<style scoped>

</style>