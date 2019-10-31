<template>
    <v-ons-page class="review">
        <div class="page__content"
             v-on:scroll.passive="onScroll"
        >
            <MainReview></MainReview>
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
                positionY: 0
            }
        },
        methods: {
            onScroll (e) {
                this.positionY = e.target.scrollTop
            }
        },
        watch: {
            positionY: function () {
                this.$eventBus.$emit('change-position-y', this.positionY)
            }
        },
        mounted () {
            this.$eventBus.$on('fix-position-y', function (e) {
                console.log(e)
                document.querySelector('.review .page__content').scrollTop = e
            })
        }
    }
</script>

<style scoped>
.page__content {
    -webkit-overflow-scrolling: touch !important;
}
</style>