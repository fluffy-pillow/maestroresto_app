<template>
  <v-ons-page class="auth">
    <Logo></Logo>
    <MainAuth></MainAuth>
  </v-ons-page>
</template>

<script>
    import MainAuth from "@/components/AuthPage/MainAuth";
    import Logo from "./Logo";

    export default {
      name: "Auth",
      components: {Logo, MainAuth}
    }
</script>

<style scoped>

</style>
