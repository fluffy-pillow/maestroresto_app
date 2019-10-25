<template>
    <form class="restore-form" @submit.prevent="onSubmit">
      <label class="form-item">
        <input class="form-item-input" type="email" placeholder="Укажите Ваш e-mail" v-model="email.inputText" :class="{error: bError}">
        <span class="form-item-name">
            E-MAIL
        </span>
      </label>

      <button class="form-submit" :disabled="!bComplete">Восстановить пароль</button>
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
      name: "RestoreForm",
      data () {
        return {
          email: {
            inputText: '',
            desiredText: 'test@test.test',
          },
          bError: false
        }
      },
      methods: {
        isValid () {
          return (this.email.inputText === this.email.desiredText)
        },
        onSubmit (e) {
          if (this.isValid()) {
            this.showSystemMessage()
            this.setTextSystemMessage('Письмо с кодом восстановления успешно отправлено')
            this.setTypeSystemMessage('success')
            this.bError = false
            this.redir('Code', {
                animation: 'slide',
                animationOptions: {duration: 0.5},
              },
              false
            )
          } else {
            this.showSystemMessage()
            this.setTextSystemMessage('Такой e-mail не зарегистрирован в системе!')
            this.setTypeSystemMessage('error')
            this.bError = true
          }
        },
        ...mapActions({
          signIn: 'user/signIn',
          showSystemMessage: 'systemMessage/show',
          setTextSystemMessage: 'systemMessage/setText',
          setTypeSystemMessage: 'systemMessage/setType'
        })
      },
      computed: {
        bComplete () {
          return (this.email.inputText.length > 0)
        },
        ...mapGetters({
          bShowSystemMessage: 'systemMessage/isShow'
        })
      },
      watch: {
        bShowSystemMessage: function (newValue) {
          if (newValue === false) this.bError = false
        }
      }
    }
</script>

<style scoped>
.restore-form {

}

.form-item {
  margin-top: 18px;
  display: flex;
  position: relative;
  flex-direction: column-reverse;
}

.form-item-name {
  text-transform: uppercase;
  color: #4B4B4B;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: block;
}

.form-item-input::placeholder {
  color: #61707D;
}

.form-item-input {
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  margin-top: 8px;
  width: 100%;
  color: #4B4B4B;
}

.form-item-input.error {
  color: #FC5A5A;
}

.form-submit {
  color: #FFFFFF;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  background: #3DD498;
  border-radius: 16px;
  width: 100%;
  margin-top: 28px;
  height: 50px;
}

.form-submit:disabled {
  background: rgba(116, 130, 141, 0.2);
}

.form-item .form-item-input:focus ~ .form-item-name {
  color: #3DD498;
}
</style>
