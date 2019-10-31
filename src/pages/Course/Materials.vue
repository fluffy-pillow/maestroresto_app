<template>
    <v-ons-page class="materials">
        <div class="page__content"
             v-on:scroll.passive="onScroll"
        >
            <MainMaterials></MainMaterials>
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
                document.querySelector('.materials .page__content').scrollTop = e
            })
        },
    }
</script>

<style scoped>
.page__content {
    -webkit-overflow-scrolling: touch !important;
}
</style>