<template>
    <v-ons-page class="certification-results">
        <Header></Header>
        <MainCertificationResults></MainCertificationResults>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../../components/CertificationsPage/CertificationResultsPage/Header";
    import MainCertificationResults
        from "../../components/CertificationsPage/CertificationResultsPage/MainCertificationResults";

    export default {
        name: "CertificationResult",
        components: {MainCertificationResults, Header},
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