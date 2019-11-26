<template>
    <v-ons-page class="restore">
        <DefaultHeader :close-button-variant="'cross'"></DefaultHeader>
        <MainRestore></MainRestore>
    </v-ons-page>
</template>

<script>
    import MainRestore from "@/components/RestorePage/MainRestore";
    import DefaultHeader from "../components/DefaultHeader";
    export default {
      name: "Restore",
      components: {DefaultHeader, MainRestore},
    }
</script>

<style scoped>

</style>
