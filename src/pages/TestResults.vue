<template>
    <v-ons-page class="test-results">
        <Header></Header>
        <MainTestResults></MainTestResults>
    </v-ons-page>
</template>

<script>
    import Header from "../components/TestResultsPage/Header";
    import MainTestResults from "../components/TestResultsPage/MainTestResults";
    export default {
        name: "TestResults",
        components: {MainTestResults, Header}
    }
</script>

<style scoped>

</style>