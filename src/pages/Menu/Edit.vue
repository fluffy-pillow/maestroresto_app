<template>
    <v-ons-page class="edit">
        <Header></Header>
        <MainEditPage></MainEditPage>
    </v-ons-page>
</template>

<script>
    import Header from "../../components/MenuPage/EditPage/Header";
    import MainEditPage from "../../components/MenuPage/EditPage/MainEditPage";
    export default {
        name: "Edit",
        components: {MainEditPage, Header}
    }
</script>

<style scoped>

</style>