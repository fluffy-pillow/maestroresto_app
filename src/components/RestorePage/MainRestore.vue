<template>
    <main class="main-restore">
      <h1 class="title">Восстановить пароль</h1>
      <p class="desc">
        Укажите e-mail, к которому привязан этот аккаунт. Мы вышлем на него код для сброса пароля
      </p>
      <RestoreForm></RestoreForm>
    </main>
</template>

<script>
    import RestoreForm from "./RestoreForm";
    export default {
      name: "MainRestore",
      components: {RestoreForm}
    }
</script>

<style scoped>
  .main-restore {
      padding-left: 16px;
      padding-right: 16px;
  }

  .title {
    margin-top: 16px;
  }

  .desc {
    color: #61707D;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 4px;
  }
</style>
