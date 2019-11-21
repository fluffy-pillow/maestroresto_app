<template>
  <v-ons-page class="new-password" @show="onShowPage">
    <MainNewPassword></MainNewPassword>
  </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import MainNewPassword from "@/components/NewPasswordPage/MainNewPassword";
    export default {
      name: "NewPassword",
      components: {MainNewPassword},
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
