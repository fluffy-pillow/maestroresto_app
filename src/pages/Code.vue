<template>
  <v-ons-page class="code">
    <DefaultHeader></DefaultHeader>
    <MainCode></MainCode>
  </v-ons-page>
</template>

<script>
    import MainCode from "@/components/CodePage/MainCode";
    import DefaultHeader from "../components/DefaultHeader";


    export default {
      name: "Code",
      components: {DefaultHeader, MainCode}
    }
</script>

<style scoped>
</style>
