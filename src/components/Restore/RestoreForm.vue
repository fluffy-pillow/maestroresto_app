<template>
    <form class="restore-form" @submit.prevent="onSubmit">
      <label class="form-item ">
        <input class="form-item-input need-keyboard"
               type="email"
               placeholder="Укажите Ваш e-mail"
               v-model="email.inputText"
               :class="{error: bError}"
               @click.prevent="onClickInput"
        >
        <span class="form-item-name">
            E-MAIL
        </span>
      </label>

      <button class="form-submit" :disabled="!bComplete">Восстановить пароль</button>
    </form>
</template>

<script>
    import {mapActions} from 'vuex'

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
        onClickInput () {
          if (this.bError) this.bError = false
        },
        onSubmit (e) {
          if (this.isValid()) {
            this.bError = false

            this.systemMessage(
              {
                type: 'success',
                message: 'Письмо с кодом восстановления успешно отправлено',
                duration: 5000
              }
            )

            this.$router.push('Code')

          } else {
            this.systemMessage(
              {
                type: 'error',
                message: 'Такой e-mail не зарегистрирован в системе!',
                duration: 5000
              }
            )
            this.bError = true
          }
        },
        ...mapActions({
          systemMessage: 'systemMessage/systemMessage'
        })
      },
      computed: {
        bComplete () {
          return (this.email.inputText.length > 0)
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
