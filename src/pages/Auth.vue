<template>
  <v-ons-page class="auth">
    <Header></Header>
    <MainAuth></MainAuth>
  </v-ons-page>
</template>

<script>
    import MainAuth from "@/components/Auth/MainAuth";
    import Header from "@/components/Auth/Header";
    export default {
      name: "Auth",
      components: {Header, MainAuth}
    }
</script>

<style scoped>

</style>
