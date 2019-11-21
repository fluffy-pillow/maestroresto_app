<template>
    <div class="review">
        <MainReview></MainReview>
    </div>
</template>

<script>
    import MainReview from "@/components/CoursePage/Review/MainReview";
    export default {
        name: "Review",
        components: {MainReview}
    }
</script>

<style scoped>
.review {
    width: 100vw;
    -webkit-overflow-scrolling: touch !important;
    min-width: 100vw;
}
</style>