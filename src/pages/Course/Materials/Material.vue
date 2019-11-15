<template>
    <v-ons-page class="material" @show="onShowPage">
        <StickyHeader></StickyHeader>
        <MainMaterial></MainMaterial>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import StickyHeader from "@/components/Course/StickyHeader";
    import MainMaterial from "@/components/Course/Materials/Material/MainMaterial";
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