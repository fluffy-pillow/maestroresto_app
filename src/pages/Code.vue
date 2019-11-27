<template>
  <v-ons-page class="code">
    <DefaultHeader></DefaultHeader>
    <main>
      <h1 class="title">Восстановить пароль</h1>
      <p class="desc">
        Мы отправили письмо с кодом подтверждения для сброса пароля. Пожалуйста, введите его
      </p>
      <CodeForm></CodeForm>
      <div class="bottom">
        <p v-if="bTimerStarted" class="info">Повторно запросить код через 00:00:{{timer | transform}}</p>
        <button class="re-request-code-button" @click="reRequestCode" v-else>Повторно запросить код</button>
      </div>
    </main>
  </v-ons-page>
</template>

<script>
    import DefaultHeader from "../components/DefaultHeader";
    import CodeForm from "../components/CodePage/CodeForm";


    export default {
      name: "Code",
      components: {CodeForm, DefaultHeader},
      data () {
          return {
              timer: 60,
              timerId: 0,
              bTimerStarted: true
          }
      },
      methods: {
          reRequestCode () {
              this.runTimer()
          },
          runTimer () {
              this.bTimerStarted = true
              this.timer = 60
              let that = this
              this.timerId = setInterval(() => {
                  that.timer -= 1
              }, 1000)
          },
          stopTimer () {
              this.bTimerStarted = false
              clearInterval(this.timerId)
          }
      },
      created () {
          this.runTimer()
      },
      filters: {
          transform: function (value) {
              value = (value < 10) ? 0 + '' + value : value.toString()
              return value
          }
      },
      watch: {
          timer: function (newValue) {
              if (newValue === 0) {
                  this.stopTimer()
              }
          }
      },
      beforeDestroy () {
          this.stopTimer()
      }
    }
</script>

<style scoped>
  main {
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

  .bottom {
    margin-top: 60px;
    text-align: center;
  }

  .re-request-code-button {
    color: #3DD498;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
  }
</style>
