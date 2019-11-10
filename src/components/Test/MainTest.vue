<template>
    <main class="main-test">
        <Question></Question>
        <div class="content">
            <AnswersList>
                <AnswersItem
                        v-for="(answer, key) of tests[0].answers"
                        :key="key"
                        :answer="answer"
                >

                </AnswersItem>
            </AnswersList>

            <button :disabled="bDisabled" class="submit">
                Ответить
            </button>
        </div>
    </main>
</template>

<script>
    import AnswersList from "./AnswersList";
    import AnswersItem from "./AnswersItem";
    import Question from "./Question";
    export default {
        name: "MainTest",
        components: {Question, AnswersItem, AnswersList},
        data () {
            return {
                bDisabled: true,
                tests: [
                    {
                        answers: [
                            {
                                text: 'Приборы для первого блюда кладут дальше всего от тарелки гостя, приборы для последующих блюд кладут один за другим ближе к тарелке'
                            },
                            {
                                text: 'Приборы для первого блюда кладут ближе всего к тарелке гостя, приборы для последующих блюд кладут один за другим дальше от тарелки'
                            },
                            {
                                text: 'Приборы для первого блюда кладут ближе всего к тарелке гостя, приборы для последующих блюд кладут один за другим дальше от тарелки'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.main-test {
    padding-top: 44px;
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
</style>