<template>
  <v-ons-page class="code">
    <Header></Header>
    <MainCode></MainCode>
  </v-ons-page>
</template>

<script>
    import Header from "@/components/CodePage/Header";
    import MainCode from "@/components/CodePage/MainCode";


    export default {
      name: "Code",
      components: {MainCode, Header}
    }
</script>

<style scoped>

</style>
