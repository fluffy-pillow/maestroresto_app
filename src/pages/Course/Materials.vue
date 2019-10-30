<template>
    <v-ons-page class="materials">
        <div class="page__content"
             @scroll="onScroll"
        >
            <MainMaterials :class="{transform: bTransform}"></MainMaterials>
        </div>
    </v-ons-page>
</template>

<script>
    import MainMaterials from "@/components/Course/Materials/MainMaterials";
    export default {
        name: "Materials",
        components: {MainMaterials},
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