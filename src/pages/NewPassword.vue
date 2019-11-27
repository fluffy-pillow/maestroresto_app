<template>
  <v-ons-page class="new-password">
    <main>
      <h1 class="title">Новый пароль</h1>
      <p class="desc">
        Придумайте новый пароль
      </p>
      <NewPasswordForm></NewPasswordForm>
    </main>
  </v-ons-page>
</template>

<script>
    import NewPasswordForm from "../components/Forms/NewPasswordForm";
    export default {
      name: "NewPassword",
      components: {NewPasswordForm}
    }
</script>

<style scoped>
  main {
    padding-top: calc(44px + constant(safe-area-inset-top));
    padding-top: calc(44px + env(safe-area-inset-top));
    padding-left: 16px;
    padding-right: 16px;
  }

  .title {
    margin-top: 16px !important;
  }

  .desc {
    color: #61707D;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 4px;
  }
</style>
