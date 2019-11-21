<template>
  <form class="code-form" @submit.prevent="onSubmit">
    <label class="form-item">
      <input class="form-item-input need-keyboard"
             type="number"
             placeholder="Код из 4-х цифр"
              v-model="code.inputText"
              :class="{error: bError}"
             pattern="[0-9]*" number
             @keydown="handleKeydown"
             @click.prevent="onClickInput"
      >
      <span class="form-item-name">
          КОД ПОДТВЕРЖДЕНИЯ
        </span>
    </label>

    <button class="form-submit" :disabled="!bComplete">Восстановить пароль</button>
  </form>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import AuthService from '@/services/AuthService'

  export default {
    name: "CodeForm",
    data () {
      return {
        code: {
          inputText: '',
          desiredText: '1111',
        },
        bError: false
      }
    },
    methods: {
      handleKeydown (e) {
        if (e.target.value.length >= 4) {
          if (e.keyCode >= 48 && e.keyCode <= 90) {
            e.preventDefault()
            return false
          }
        }
      },
      onClickInput () {
        if (this.bError) this.bError = false
      },
      isValid () {
        return (this.code.inputText === this.code.desiredText)
      },
      serviceRequest (data) {
        AuthService.validate(data, response => {
            this.hideGlobalPreloader()
            if (response.error) {
                this.systemMessage(
                    {
                        type: 'error',
                        message: response.error.message,
                        duration: 5000
                    }
                )

                this.bError = true
                this.removeTempToken()
                this.removeRestoreCode()
                this.$router.push('/restore')
            } else {
                this.bError = false
                this.setRestoreCode(this.code.inputText)
                this.$router.push('/newpassword')
            }
        })
      },
      onSubmit (e) {
          this.showGlobalPreloader()
          let data = {key: this.code.inputText, token: this.tempToken}
          this.serviceRequest(data)
      },
      ...mapActions({
        systemMessage: 'systemMessage/systemMessage',
        showGlobalPreloader: 'globalPreloader/show',
        hideGlobalPreloader: 'globalPreloader/hide',
        setRestoreCode: 'user/setRestoreCode',
        removeRestoreCode: 'user/removeRestoreCode',
        removeTempToken: 'user/removeTempToken'

      })
    },
    computed: {
      ...mapGetters({
          tempToken: 'user/getTempToken'
      }),
      bComplete () {
        return (this.code.inputText.length === 4)
      }
    }
  }
</script>

<style scoped>
  .code-form {

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
