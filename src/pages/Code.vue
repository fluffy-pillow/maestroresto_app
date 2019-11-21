<template>
  <v-ons-page class="code" @show="onShowPage">
    <Header></Header>
    <MainCode></MainCode>
  </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "@/components/CodePage/Header";
    import MainCode from "@/components/CodePage/MainCode";


    export default {
      name: "Code",
      components: {MainCode, Header},
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
