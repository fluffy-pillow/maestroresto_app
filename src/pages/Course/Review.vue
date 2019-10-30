<template>
    <v-ons-page class="review">
        <div class="page__content"
             @scroll="onScroll"
        >
            <MainReview :class="{transform: bTransform}"></MainReview>
        </div>
    </v-ons-page>
</template>

<script>
    import MainReview from "@/components/Course/Review/MainReview";
    export default {
        name: "Review",
        components: {MainReview},
        data () {
            return {
                bTransform: false
            }
        },
        methods: {
            onScroll (e) {
                this.bTransform = (e.target.scrollTop > 0)
            }
        },
        watch: {
            bTransform: function () {
                this.$eventBus.$emit('transform-course-header', this.bTransform)
            }
        }
    }
</script>

<style scoped>
.page__content {
    -webkit-overflow-scrolling: touch !important;
}
</style>