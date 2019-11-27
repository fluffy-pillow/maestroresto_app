<template>
    <v-ons-page class="test-results">
        <DefaultHeader :close-button-variant="'cross'"></DefaultHeader>
        <main class="main-test-results">
            <section class="short-info">
                <div class="image">
                    <img :src="require('@/assets/images/test-results.svg')">
                </div>
                <Rating></Rating>
            </section>
            <Answers :response="tests"></Answers>
            <section class="controls">
                <button class="back-button" @click="openMaterialPage">
                    Вернуться к урокам
                </button>
                <button class="again-button" @click="openTestPage">
                    Пройти тест заново
                </button>
            </section>
        </main>
    </v-ons-page>
</template>

<script>
    import DefaultHeader from "../components/DefaultHeader";
    import Answers from "../components/Test/Results/Answers";
    import Rating from "../components/Test/Results/Rating";
    export default {
        name: "TestResults",
        components: {Rating, DefaultHeader, Answers},
        data () {
            return {
                tests: [
                    {
                        question: 'Как правильно раскладывать приборы?',
                        answers: [
                            {
                                text: 'Приборы для первого блюда кладут дальше всего от тарелки гостя, приборы для последующих блюд кладут один за другим ближе к тарелке',
                                desc: '(Расстояние между столовыми приборами и тарелкой должно быть \n' +
                                '0,5-1 см.)'
                            }
                        ],
                        correct: true
                    },
                    {
                        question: 'Видео вопрос (что входит в обязанности официанта)',
                        answers: [
                            {
                                text: 'Контролирует своевременность приготовления и товарный вид блюд перед подачей на стол.',
                                desc: 'Сюда же входят поведенческие паттерны, коммуникационные ответы на вопросы команды, и постоянная внутренняя связь с ней.'
                            }
                        ],
                        correctAnswers: [
                            {
                                text: 'Контролирует своевременность приготовления и товарный вид блюд перед подачей на стол.'
                            },
                            {
                                text: 'Контролирует своевременность приготовления и товарный вид блюд перед подачей на стол.'
                            },
                            {
                                text: 'Контролирует своевременность приготовления и товарный вид блюд перед подачей на стол.'
                            }
                        ],
                        correct: false
                    }
                ]
            }
        },
        methods: {
            openMaterialPage () {
                this.$router.push(this.$route.matched[this.$route.matched.length - 2].path)
            },
            openTestPage () {
                this.$router.push(this.$route.matched[this.$route.matched.length - 2].path + '/test/1')
            }
        }
    }
</script>

<style scoped>
    .controls {
        margin-top: 32px;
    }

    main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: calc(100px + env(safe-area-inset-top));
        position: relative;
        top: -22px;
    }

    .image {
        display: flex;
        justify-content: center;
    }


    .back-button {
        background: #3DD498;
        border: 1px solid #3DD498;
        box-sizing: border-box;
        border-radius: 16px;
        height: 50px;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        width: 100%;
    }

    .again-button {
        color: #3DD498;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        margin-top: 23px;
        width: 100%;
    }
</style>