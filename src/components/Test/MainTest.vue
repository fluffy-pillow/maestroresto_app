<template>
    <main class="main-test">
        <Question :question="tests[$route.params.id - 1].question" :video="tests[$route.params.id - 1].video"></Question>
        <div class="content">
            <Answers :answers="tests[$route.params.id - 1].answers"></Answers>

            <button :disabled="!bDisabled" class="submit" @click="handleFunctionCall(buttonFunctionName)">
                {{submitButtonText}}
            </button>
            <button class="last-question-button" v-if="$route.params.id > 1" @click="openPreviosQuestion">
                Предыдущий вопрос
            </button>
        </div>
    </main>
</template>

<script>
    import Question from "./Question";
    import Answers from "./Answers";
    export default {
        name: "MainTest",
        components: {Answers, Question},
        data () {
            return {
                currentTest: null,
                bSubmit: false,
                buttonFunctionName: 'onSubmit',
                submitButtonText: 'Ответить',
                selectedAnswer: null,
                correctAnswer: null,
                wrongAnswer: false,
                tests: [
                    {
                        type: 'default',
                        answers: [
                            {
                                id: 0,
                                text: 'Приборы для первого блюда кладут дальше всего от тарелки гостя, приборы для последующих блюд кладут один за другим ближе к тарелке',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            },
                            {
                                id: 1,
                                text: 'Приборы для первого блюда кладут ближе всего к тарелке гостя, приборы для последующих блюд кладут один за другим дальше от тарелки',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            },
                            {
                                id: 2,
                                text: 'Приборы для первого блюда кладут ближе всего к тарелке гостя, приборы для последующих блюд кладут один за другим дальше от тарелки',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            }
                        ],
                        correctAnswer: 0,
                        question: 'Как правильно раскладывать приборы?'
                    },
                    {
                        type: 'default',
                        question: 'Как правильно раскладывать приборы?',
                        answers: [
                            {
                                id: 0,
                                text: 'Приборы для первого блюда кладут дальше всего от тарелки гостя, приборы для последующих блюд кладут один за другим ближе к тарелке',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            },
                            {
                                id: 1,
                                text: 'Приборы для первого блюда кладут ближе всего к тарелке гостя, приборы для последующих блюд кладут один за другим дальше от тарелки',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            },
                            {
                                id: 2,
                                text: 'Приборы для первого блюда кладут ближе всего к тарелке гостя, приборы для последующих блюд кладут один за другим дальше от тарелки',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            }
                        ],
                        video: "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/Caminandes_-_Gran_Dillama_-_Blender_Foundation's_new_Open_Movie.webm/Caminandes_-_Gran_Dillama_-_Blender_Foundation's_new_Open_Movie.webm.720p.vp9.webm",
                        correctAnswer: 0
                    }
                ]
            }
        },
        methods: {
            handleFunctionCall (functionName) {
                this[functionName]()
            },
            onSubmit () {
                this.correctAnswer = this.tests[this.$route.params.id - 1].correctAnswer
                if (this.selectedAnswer !== this.correctAnswer) {
                    this.wrongAnswer = true
                }
                this.bSubmit = true
                this.submitButtonText = 'Следующий вопрос'
                this.buttonFunctionName = 'openNextQuestion'
            },
            openNextQuestion () {
                let id = Number(this.$route.params.id) + 1
                this.$router.push(
                    this.$route.matched[this.$route.matched.length - 2].path + '/test/' + id
                )
            },
            openPreviosQuestion () {
                let id = Number(this.$route.params.id) - 1
                this.$router.push(
                    this.$route.matched[this.$route.matched.length - 2].path + '/test/' + id
                )
            }
        },
        computed: {
            bDisabled () {
                return (this.selectedAnswer >= 0)
            }
        },
        created () {
            switch (this.tests[this.$route.params.id - 1].type)  {
                case 'default': {
                    this.selectedAnswer = -1
                    break;
                }
            }
        }
    }
</script>

<style scoped>
.main-test {
    padding-top: 44px;
    padding-bottom: 80px;
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
    background: #3DD498;
    border-radius: 16px;
    width: 100%;
    margin-top: 48px;
    height: 50px;
}

.submit:disabled {
    background: rgba(116, 130, 141, 0.2);
}

.last-question-button {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 22px;
    color: #3DD498;
    width: 100%;
}
</style>