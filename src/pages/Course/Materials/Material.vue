<template>
    <v-ons-page class="material">
        <Header :title="'Урок №1'"
        >
            <FavoriteButton class="favorite-button" slot="rightSideContent"></FavoriteButton>
        </Header>
        <MainMaterial></MainMaterial>
    </v-ons-page>
</template>

<script>
    import Header from "@/components/Header";
    import MainMaterial from "@/components/CoursePage/Materials/Material/MainMaterial";
    import FavoriteButton from "../../../components/FavoriteButton";
    export default {
        name: "Material",
        components: {FavoriteButton, MainMaterial, Header}
    }
</script>

<style scoped>
.favorite-button {
    margin-left: auto;
}
</style>