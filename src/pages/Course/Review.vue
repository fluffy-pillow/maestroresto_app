<template>
    <v-ons-page class="review">
        <Head></Head>
        <MainReview></MainReview>
    </v-ons-page>
</template>

<script>
    import MainReview from "@/components/Course/Review/MainReview";
    import Head from "@/components/Course/Head";
    export default {
        name: "Review",
        components: {Head, MainReview}
    }
</script>

<style scoped>
.review {}
</style>