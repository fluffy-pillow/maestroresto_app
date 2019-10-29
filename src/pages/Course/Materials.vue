<template>
    <v-ons-page class="materials">
        <Head></Head>
        <MainMaterials></MainMaterials>
    </v-ons-page>
</template>

<script>
    import MainMaterials from "@/components/Course/Materials/MainMaterials";
    import Head from "../../components/Course/Head";
    export default {
        name: "Materials",
        components: {Head, MainMaterials},
    }
</script>

<style scoped>

</style>