<template>
  <v-ons-page class="auth" @show="onShowPage">
    <Header></Header>
    <MainAuth></MainAuth>
  </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import MainAuth from "@/components/AuthPage/MainAuth";
    import Header from "@/components/AuthPage/Header";

    export default {
      name: "Auth",
      components: {Header, MainAuth},
      methods: {
          onShowPage () {
              this.hideFooter()
          },
          ...mapActions({
              hideFooter: 'footer/hide'
          })
      }
    }
</script>

<style scoped>

</style>
