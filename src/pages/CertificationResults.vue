<template>
    <v-ons-page class="certification-results">
        <DefaultHeader :close-button-variant="'cross'"></DefaultHeader>
        <MainCertificationResults></MainCertificationResults>
    </v-ons-page>
</template>

<script>
    import MainCertificationResults
        from "../components/CertificationsPage/CertificationResultsPage/MainCertificationResults";
    import DefaultHeader from "../components/DefaultHeader";

    export default {
        name: "CertificationResult",
        components: {DefaultHeader, MainCertificationResults},

    }
</script>

<style scoped>

</style>