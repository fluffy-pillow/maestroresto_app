<template>
    <v-ons-page class="material">
        <StickyHeader></StickyHeader>
        <MainMaterial></MainMaterial>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/CoursePage/StickyHeader";
    import MainMaterial from "@/components/CoursePage/Materials/Material/MainMaterial";
    export default {
        name: "Material",
        components: {MainMaterial, StickyHeader}
    }
</script>

<style scoped>

</style>