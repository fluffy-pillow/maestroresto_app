<template>
    <section class="edit-form">
        <div class="title">
            Основная информация
        </div>
        <div class="form">
            <label class="form-item">
                <span class="item-name">
                    Имя
                </span>
                <input type="text" class="form-item-input"
                       :value="form.name.inputText"
                       :data-id="form.name.dataset"
                       @click="handleClick"
                       @blur="handleBlur">
            </label>
            <label class="form-item">
                <span class="item-name">
                    Фамилия
                </span>
                <input type="text" class="form-item-input"
                       :value="form.surname.inputText"
                       :data-id="form.surname.dataset"
                       @click="handleClick"
                       @blur="handleBlur">
            </label>
            <label class="form-item">
                <span class="item-name">
                    email
                </span>
                <input type="text" class="form-item-input"
                       :value="form.email.inputText"
                       :data-id="form.email.dataset"
                       @click="handleClick"
                       @blur="handleBlur">
            </label>
            <label class="form-item">
                <span class="item-name">
                    Номер телефона
                </span>

                <input class="form-item-input"
                      :value="form.phone.inputText"
                      :data-id="form.phone.dataset"
                      v-imask="form.phone.mask"
                      @click="handleClick"
                      @blur="handleBlur">
            </label>
            <label class="form-item">
                <span class="item-name">
                    Пароль
                </span>
                <input type="text" class="form-item-input password"
                       :value="form.password.inputText"
                       :data-id="form.password.dataset"
                       @click="handleClick"
                       @blur="handleBlur">
            </label>
        </div>
    </section>
</template>

<script>
    import {IMaskDirective} from 'vue-imask';

    export default {
        name: "EditForm",
        data () {
            return {
                form: {
                    name: {
                        inputText: 'Константин',
                        dataset: 'name'
                    },
                    surname: {
                        inputText: 'Новиков',
                        dataset: 'surname'
                    },
                    email: {
                        inputText: 'robwaiter@gmail.com',
                        dataset: 'email'
                    },
                    phone: {
                        inputText: '89003433452',
                        dataset: 'phone',
                        mask: {
                            mask: '{8} 000 000-00-00'
                        }
                    },
                    password: {
                        inputText: '12345678',
                        dataset: 'password'
                    }
                }
            }
        },
        methods: {
            handleClick (e) {
                let el = e.target
                let tempStr = el.value
                el.value = ''
                if (el.dataset.id !== 'password') el.value = tempStr
            },
            handleBlur (e) {
                let el = e.target
                el.value = this.form[el.dataset.id].inputText
            }
        },
        directives: {
            imask: IMaskDirective
        }
    }
</script>

<style scoped>
.title {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: #8D8D8D;
    margin-left: 16px;
}

.form {
    margin-top: 8px;
}

.form-item {
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    height: 44px;
    align-items: center;
    box-shadow: inset 0px -1px 0px #E6E6E6;
}

.form-item-input.password {
    -webkit-text-security: square !important;
    font-size: 6px;
    letter-spacing: 4px;
}

.form-item:nth-child(2) {
    margin-top: 32px;
}

.item-name {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.4px;
    color: #8D8D8D;
    width: 40%;
}

.form-item-input {
    flex: 1;
    font-size: 15px;
    line-height: 22px;
    text-align: right;
    letter-spacing: -0.4px;
    color: #4B4B4B;
}
</style>