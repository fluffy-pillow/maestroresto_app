<template>
  <v-ons-page class="auth">
    <Header></Header>
    <MainAuth></MainAuth>
  </v-ons-page>
</template>

<script>
    import MainAuth from "@/components/AuthPage/MainAuth";
    import Header from "@/components/AuthPage/Header";

    export default {
      name: "Auth",
      components: {Header, MainAuth}
    }
</script>

<style scoped>

</style>
