<template>
    <main class="main-auth">
      <h1 class="title">{{$t("auth.title")}}</h1>
      <p class="desc">
          {{$t("auth.desc")}}
      </p>
      <AuthForm></AuthForm>
      <button class="forgot-password-button" @click="openRestorePage">
          {{$t("auth.forgot_password_button")}}
      </button>
    </main>
</template>

<script>
    import AuthForm from "./AuthForm";
    export default {
      name: "MainAuth",
      components: {AuthForm},
      methods: {
          openRestorePage () {
/*              this.redir('Restore', {
                      animation: 'slide',
                      animationOptions: {duration: 0.5},
                  },
                  true,
                  false
              )*/
              this.$router.push('Restore')
          }
      }
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
