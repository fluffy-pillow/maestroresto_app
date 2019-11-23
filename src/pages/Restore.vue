<template>
    <v-ons-page class="restore">
        <Header></Header>
        <MainRestore></MainRestore>
    </v-ons-page>
</template>

<script>
    import Header from "@/components/RestorePage/Header";
    import MainRestore from "@/components/RestorePage/MainRestore";
    export default {
      name: "Restore",
      components: {MainRestore, Header},
    }
</script>

<style scoped>

</style>
