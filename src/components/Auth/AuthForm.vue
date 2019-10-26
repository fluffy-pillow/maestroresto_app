<template>
    <form class="auth-form" @submit.prevent="onSubmit">
      <label class="form-item">
        <input class="form-item-input need-keyboard"
                  type="email"
                  placeholder="Укажите Ваш e-mail"
                  v-model="email.inputText"
                  :class="{error: bError}">
        <span class="form-item-name">
            E-MAIL
        </span>
      </label>

      <label class="form-item">
        <input class="form-item-input"
                  v-model="password.inputText"
                  :type="password.inputType"
                  placeholder="Введите пароль"
                  :class="{error: bError}"
                  ref="passwordInput"
        >
        <span class="form-item-name">
            Пароль
        </span>
        <span class="switch-input-type-button" @click="togglePasswordInputType">
          <span v-if="password.inputType === 'password'">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 4C5.47333 4 3.22 5.42 2.12 7.66667C3.22 9.91333 5.47333 11.3333 7.99999 11.3333C10.5267 11.3333 12.78 9.91333 13.88 7.66667C12.78 5.42 10.5267 4 7.99999 4ZM7.99999 10.6667C6.34666 10.6667 4.99999 9.32 4.99999 7.66667C4.99999 6.01333 6.34666 4.66667 7.99999 4.66667C9.65333 4.66667 11 6.01333 11 7.66667C11 9.32 9.65333 10.6667 7.99999 10.6667Z" fill="#3DD498" fill-opacity="0.2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 2.66675C4.66667 2.66675 1.82001 4.74008 0.666672 7.66675C1.82001 10.5934 4.66667 12.6667 8.00001 12.6667C11.3333 12.6667 14.18 10.5934 15.3333 7.66675C14.18 4.74008 11.3333 2.66675 8.00001 2.66675ZM8.00001 11.3334C5.47334 11.3334 3.22001 9.91341 2.12001 7.66675C3.22001 5.42008 5.47334 4.00008 8.00001 4.00008C10.5267 4.00008 12.78 5.42008 13.88 7.66675C12.78 9.91341 10.5267 11.3334 8.00001 11.3334ZM8.00001 4.66675C6.34667 4.66675 5.00001 6.01341 5.00001 7.66675C5.00001 9.32008 6.34667 10.6667 8.00001 10.6667C9.65334 10.6667 11 9.32008 11 7.66675C11 6.01341 9.65334 4.66675 8.00001 4.66675ZM8.00001 9.33341C7.08001 9.33341 6.33334 8.58675 6.33334 7.66675C6.33334 6.74675 7.08001 6.00008 8.00001 6.00008C8.92001 6.00008 9.66667 6.74675 9.66667 7.66675C9.66667 8.58675 8.92001 9.33341 8.00001 9.33341Z" fill="#3DD498"/>
            </svg>
          </span>
          <span v-else>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 9.33333C8.02668 9.33333 8.05335 9.32667 8.08001 9.32667L6.34001 7.58667C6.34001 7.61333 6.33335 7.64 6.33335 7.66667C6.33335 8.58667 7.08001 9.33333 8.00001 9.33333ZM8.67334 6.14L9.52668 6.99333C9.35334 6.61333 9.05334 6.30667 8.67334 6.14ZM13.88 7.66667C12.78 5.42 10.5267 4 8.00001 4C7.54668 4 7.10668 4.06 6.67334 4.14667L7.28668 4.76C7.52001 4.7 7.75334 4.66667 8.00001 4.66667C9.65334 4.66667 11 6.01333 11 7.66667C11 7.91333 10.96 8.14667 10.9067 8.38L12.2733 9.74667C12.9267 9.17333 13.48 8.47333 13.88 7.66667ZM8 11.3333C8.63333 11.3333 9.24666 11.2467 9.83333 11.0733L9.18 10.42C8.82 10.58 8.42 10.6667 8 10.6667C6.34666 10.6667 5 9.32 5 7.66667C5 7.24667 5.08666 6.84667 5.24 6.48667L4.07333 5.31333C3.26 5.92 2.58666 6.71333 2.12 7.66C3.22 9.90667 5.47333 11.3333 8 11.3333Z" fill="#3DD498" fill-opacity="0.2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 3.99997C10.5266 3.99997 12.78 5.41997 13.88 7.66663C13.4866 8.47997 12.9333 9.17997 12.2733 9.74663L13.2133 10.6866C14.14 9.86663 14.8733 8.83997 15.3333 7.66663C14.18 4.73997 11.3333 2.66663 7.99997 2.66663C7.1533 2.66663 6.33996 2.79997 5.5733 3.04663L6.6733 4.14663C7.10663 4.05997 7.54663 3.99997 7.99997 3.99997ZM9.51994 6.9933L10.8999 8.3733C10.9533 8.14663 10.9933 7.90663 10.9933 7.65997C10.9999 6.00663 9.65327 4.66663 7.99994 4.66663C7.75328 4.66663 7.51994 4.70663 7.28661 4.75997L8.66661 6.13997C9.05328 6.30663 9.35327 6.6133 9.51994 6.9933ZM1.33996 2.57997L3.12663 4.36663C2.03996 5.21997 1.17996 6.3533 0.666626 7.66663C1.81996 10.5933 4.66663 12.6666 7.99996 12.6666C9.01329 12.6666 9.98663 12.4733 10.88 12.12L13.16 14.4L14.1 13.46L2.27996 1.6333L1.33996 2.57997ZM6.33996 7.57997L8.07996 9.31997C8.05329 9.32663 8.02663 9.3333 7.99996 9.3333C7.07996 9.3333 6.33329 8.58664 6.33329 7.66664C6.33329 7.6333 6.33996 7.6133 6.33996 7.57997ZM4.07327 5.3133L5.23994 6.47997C5.08661 6.84663 4.99994 7.24663 4.99994 7.66663C4.99994 9.31997 6.34661 10.6666 7.99994 10.6666C8.41994 10.6666 8.81994 10.58 9.17994 10.4266L9.83327 11.08C9.24661 11.24 8.63327 11.3333 7.99994 11.3333C5.47327 11.3333 3.21994 9.9133 2.11994 7.66663C2.58661 6.7133 3.26661 5.92663 4.07327 5.3133Z" fill="#3DD498"/>
            </svg>
          </span>
        </span>
      </label>

      <NavigationButton class="form-submit"
              :disabled="!bComplete"
              :options="{
                animation: 'lift',
                animationOptions: {duration: 0.5},
              }"
              :to="to"
      >
        Войти
      </NavigationButton>
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
      name: "AuthForm",
      data () {
        return {
          email: {
            inputText: '',
            desiredText: 'test@test.test',
          },
          password: {
            inputText: '',
            desiredText: 'test',
            inputType: 'password',
          },
          bError: false,
          to: ''
        }
      },
      methods: {
        isValid () {
          return (this.email.inputText === this.email.desiredText && this.password.inputText === this.password.desiredText)
        },
        togglePasswordInputType (e) {
          this.password.inputType = (this.password.inputType === 'password') ? 'text' : 'password'
        },
        onSubmit (e) {
          if (this.isValid()) {
            this.bError = false
            this.hideSystemMessage()
            this.signIn()
            this.to = 'Dashboard'
          } else {
            this.showSystemMessage()
            this.setTextSystemMessage('Вы ввели неправильный e-mail или пароль')
            this.setTypeSystemMessage('error')
            this.bError = true
          }
        },
        ...mapActions({
          signIn: 'user/signIn',
          showSystemMessage: 'systemMessage/show',
          hideSystemMessage: 'systemMessage/hide',
          setTextSystemMessage: 'systemMessage/setText',
          setTypeSystemMessage: 'systemMessage/setType'
        })
      },
      computed: {
        bComplete () {
          return (this.email.inputText.length > 0) && (this.password.inputText.length > 0)
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
.auth-form {

}

.form-item {
  margin-top: 28px;
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

.switch-input-type-button {
  position: absolute;
  right: 0;
}

.switch-input-type-button span {
  display: flex;
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
