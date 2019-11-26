<template>
    <v-ons-page class="test-results">
        <DefaultHeader :close-button-variant="'cross'"></DefaultHeader>
        <MainTestResults></MainTestResults>
    </v-ons-page>
</template>

<script>
    import MainTestResults from "../components/TestResultsPage/MainTestResults";
    import DefaultHeader from "../components/DefaultHeader";
    export default {
        name: "TestResults",
        components: {DefaultHeader, MainTestResults}
    }
</script>

<style scoped>

</style>