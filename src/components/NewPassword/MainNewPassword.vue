<template>
  <main class="main-new-password">
    <h1 class="title">Новый пароль</h1>
    <p class="desc">
      Придумайте новый пароль
    </p>
    <NewPasswordForm></NewPasswordForm>
  </main>
</template>

<script>
    import NewPasswordForm from "./NewPasswordForm";
    export default {
        name: "MainNewPassword",
      components: {NewPasswordForm}
    }
</script>

<style scoped>
  .title {
    margin-top: calc(60px + constant(safe-area-inset-top));
    margin-top: calc(60px + env(safe-area-inset-top));
  }

  .desc {
    color: #61707D;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 4px;
  }

</style>
