<template>
  <v-ons-page class="code">
    <Header></Header>
    <MainCode></MainCode>
  </v-ons-page>
</template>

<script>
    import Header from "@/components/Code/Header";
    import MainCode from "@/components/Code/MainCode";


    export default {
        name: "Code",
      components: {MainCode, Header}
    }
</script>

<style scoped>

</style>
