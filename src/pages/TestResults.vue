<template>
    <v-ons-page class="test-results" @show="onShowPage">
        <Header></Header>
        <MainTestResults></MainTestResults>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../components/TestResultsPage/Header";
    import MainTestResults from "../components/TestResultsPage/MainTestResults";
    export default {
        name: "TestResults",
        components: {MainTestResults, Header},
        methods: {
            onShowPage () {
                this.hideFooter()
            },
            ...mapActions({
                hideFooter: 'footer/hide'
            })
        }
    }
</script>

<style scoped>

</style>