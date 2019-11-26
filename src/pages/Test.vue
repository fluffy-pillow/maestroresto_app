<template>
    <v-ons-page class="test" ref="test">
        <Header :title="'вопрос ' + $route.params.id + ' из 3'"
                :color="'green'"
                :title-uppercase="true"
        >
        </Header>
        <MainTest></MainTest>
    </v-ons-page>
</template>

<script>
    import Header from "../components/Header";
    import MainTest from "../components/TestPage/MainTest";
    export default {
        name: "Test",
        components: {MainTest, Header}
    }
</script>

<style scoped>

</style>