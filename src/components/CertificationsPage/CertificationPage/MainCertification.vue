<template>
    <main class="main-cerification">
        <div class="special-space"></div>
        <Question :question="currentTest.question" :video="currentTest.video" :picture="currentTest.picture"></Question>
        <div class="content">
            <Answers :answers="currentTest.answers" :test-type="currentTest.type">

            </Answers>

            <button :disabled="!bDisabled" class="submit" @click="handleFunctionCall(buttonFunctionName)">
                {{submitButtonText}}
            </button>
            <button class="last-question-button" v-if="$route.params.id > 1" @click="openPreviousQuestion">
                Предыдущий вопрос
            </button>
        </div>
    </main>
</template>

<script>
    import Question from "./Question";
    import Answers from "./Answers";
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "MainCertification",
        components: {Answers, Question},
        data () {
            return {
                answer: [],
                bSubmit: false,
                anotherAnswer: '',
                buttonFunctionName: 'onSubmit',
                submitButtonText: 'Ответить',
            }
        },
        props: {
            tests: Array
        },
        methods: {
            ...mapActions({
                updateSavedData: 'certifications/updateSavedData'
            }),
            handleFunctionCall (functionName) {
                this[functionName]()
            },
            changeAnswerVariableType () {
                switch (this.currentTest.type) {
                    case 'default': {
                        this.answer = -1
                        break
                    }
                    case 'multi': {
                        this.answer = []
                        break
                    }
                    case 'another': {
                        this.answer = []
                        break
                    }
                    default: {
                        break
                    }
                }
            },
            onSubmit () {
                this.currentTestSavedData.correctAnswer = this.currentTest.correctAnswer
                switch (this.currentTest.type) {
                    case 'default': {
                        if (this.currentTestSavedData.answer !== this.currentTestSavedData.correctAnswer) {
                            this.currentTestSavedData.bWrongAnswer = true
                        }
                        break
                    }
                    case 'multi': {
                        if (JSON.stringify(this.currentTestSavedData.answer.sort()) !==
                            JSON.stringify(this.currentTestSavedData.correctAnswer.sort())) {
                            this.currentTestSavedData.bWrongAnswer = true
                        }
                        break
                    }
                    case 'another': {
                        this.currentTestSavedData.answer.push(this.anotherAnswer)
                        if (JSON.stringify(this.currentTestSavedData.answer.sort()) !==
                            JSON.stringify(this.currentTestSavedData.correctAnswer.sort())) {
                            this.currentTestSavedData.bWrongAnswer = true
                        }
                        break
                    }
                    default: {
                        break
                    }
                }

                this.bSubmit = true

                if (this.tests.length === Number(this.$route.params.id)) {
                    this.buttonFunctionName = 'openResultsPage'
                    this.submitButtonText = 'Результаты'
                } else {
                    this.buttonFunctionName = 'openNextQuestion'
                    this.submitButtonText = 'Следующий вопрос'
                }
            },
            openResultsPage () {
                this.$router.push(
                    this.$route.matched[this.$route.matched.length - 2].path + '/' + this.$route.params.slug + '/results'
                )
                return
            },
            openNextQuestion () {
                let id = Number(this.$route.params.id) + 1
                let slug = this.$route.params.slug
                this.$router.push(
                    this.$route.matched[this.$route.matched.length - 2].path + '/' + slug + '/' + id
                )
            },
            openPreviousQuestion () {
                let id = Number(this.$route.params.id) - 1
                let slug = this.$route.params.slug
                this.$router.push(
                    this.$route.matched[this.$route.matched.length - 2].path + '/' + slug + '/' + id
                )
            },
        },
        computed: {
            bDisabled () {
                let ret

                switch (this.currentTest.type) {
                    case 'default': {
                        ret = (this.currentTestSavedData.answer >= 0)
                        break
                    }
                    case 'multi': {
                        ret = (this.currentTestSavedData.answer.length > 0)
                        break
                    }
                    case 'another': {
                        ret = (this.currentTestSavedData.answer.length > 0) || this.anotherAnswer !== ''
                        break
                    }
                    default: {
                        break
                    }
                }
                return ret
            },
            currentTest () {
                return (typeof this.tests[this.$route.params.id - 1] === 'undefined') ? {} : this.tests[this.$route.params.id - 1]
            },
            currentTestSavedData () {
                return this.savedData[this.$route.params.id - 1]
            },
            ...mapGetters({
                savedData: 'certifications/getSavedData'
            })
        },
        watch: {
            '$route.params.id': function (newValue) {
                if (!isNaN(Number(newValue))) {
                    console.log(11111)
                    this.changeAnswerVariableType()
                    if (!this.savedData[this.$route.params.id - 1]) {
                        this.savedData.push({
                            answer: this.answer,
                            bWrongAnswer: false,
                            correctAnswer: null
                        })
                    }
                    this.bSubmit = false
                    this.submitButtonText = 'Ответить'
                    this.buttonFunctionName = 'onSubmit'
                    this.$parent.$parent.$refs.certification.$el.scrollTop = 0
                }
//                window.scrollTo(0,0)
            }
        },
        created () {
            this.changeAnswerVariableType()
            this.savedData.push({
                answer: this.answer,
                bWrongAnswer: false,
                correctAnswer: null
            })
        },
        destroyed () {
            this.updateSavedData([])
        }
    }
</script>

<style scoped>
.main-cerification {
    padding-top: 43px;
    padding-bottom: 80px;
    margin-top: env(safe-area-inset-top);
}

.content {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    margin-top: -16px;
    background: #ffffff;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
}

.submit {
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    background: #415393;
    border-radius: 16px;
    width: 100%;
    margin-top: 32px;
    height: 50px;
}

.submit:disabled {
    background: rgba(116, 130, 141, 0.2);
}

.special-space {
    height: calc(env(safe-area-inset-top) * 8);
    background: #415393;
}

.last-question-button {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 22px;
    color: #415393;
    width: 100%;
}
</style>