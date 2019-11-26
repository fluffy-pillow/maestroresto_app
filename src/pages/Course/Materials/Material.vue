<template>
    <v-ons-page class="material">
        <StickyHeader :title="'Урок №1'"
        >
            <FavoriteButton class="favorite-button" slot="rightSideContent"></FavoriteButton>
        </StickyHeader>
        <MainMaterial></MainMaterial>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/StickyHeader";
    import MainMaterial from "@/components/CoursePage/Materials/Material/MainMaterial";
    import FavoriteButton from "../../../components/FavoriteButton";
    export default {
        name: "Material",
        components: {FavoriteButton, MainMaterial, StickyHeader}
    }
</script>

<style scoped>
.favorite-button {
    margin-left: auto;
}
</style>