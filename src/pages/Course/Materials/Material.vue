<template>
    <v-ons-page class="material" @show="onShowPage">
        <StickyHeader></StickyHeader>
        <MainMaterial></MainMaterial>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import StickyHeader from "@/components/CoursePage/StickyHeader";
    import MainMaterial from "@/components/CoursePage/Materials/Material/MainMaterial";
    export default {
        name: "Material",
        components: {MainMaterial, StickyHeader},
        methods: {
            onShowPage () {
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show'
            })
        }
    }
</script>

<style scoped>

</style>