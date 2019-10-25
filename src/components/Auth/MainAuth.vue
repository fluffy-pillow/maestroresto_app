<template>
    <main class="main-auth">
      <h1 class="title">Авторизуйтесь</h1>
      <p class="desc">
        Войдите в систему с помощью e-mail и пароль, выданных вам администратором.
      </p>
      <AuthForm></AuthForm>
      <NavigationButton class="forgot-password-button"
            :to="'Restore'"
            :options="{
                animation: 'slide',
                animationOptions: {duration: 0.5},
              }"
            :remove-prev-page="false"
        >
        Я забыл пароль
      </NavigationButton>
    </main>
</template>

<script>
    import AuthForm from "./AuthForm";
    export default {
      name: "MainAuth",
      components: {AuthForm}
    }
</script>

<style scoped>
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
