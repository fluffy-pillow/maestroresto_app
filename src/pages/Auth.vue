<template>
  <v-ons-page class="auth">
    <Logo></Logo>
    <main class="main-auth">
      <h1 class="title">{{$t("auth.title")}}</h1>
      <p class="desc">
        {{$t("auth.desc")}}
      </p>
      <AuthForm></AuthForm>
      <button class="forgot-password-button" @click="$router.push('Restore')">
        {{$t("auth.forgot_password_button")}}
      </button>
    </main>
  </v-ons-page>
</template>

<script>
    import Logo from "./Logo";
    import AuthForm from "../components/AuthPage/AuthForm";

    export default {
      name: "Auth",
      components: {AuthForm, Logo}
    }
</script>

<style scoped>
  main {
    padding-left: 16px;
    padding-right: 16px;
  }

  .title {
    margin-top: 24px;
  }

  .desc {
    color: #61707D;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 4px;
  }

  .forgot-password-button {
    color: #3DD498;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 20px;
    width: 100%;
  }
</style>
