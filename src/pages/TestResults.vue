<template>
    <v-ons-page class="test-results">
        <Header></Header>
        <MainTestResults></MainTestResults>
    </v-ons-page>
</template>

<script>
    import Header from "../components/TestResults/Header";
    import MainTestResults from "../components/TestResults/MainTestResults";
    export default {
        name: "TestResults",
        components: {MainTestResults, Header}
    }
</script>

<style scoped>

</style>