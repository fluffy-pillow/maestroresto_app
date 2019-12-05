<template>
    <section class="answers">
        <article class="answer"
                 v-for="(test, key) of response"
                 :key="key"
                 :class="{wrong: !test.correct}"
        >
            <div class="answer-title">
                {{key + 1}}. {{test.question}}
            </div>
            <div class="answer-content">
                <div class="answer-status">

                </div>
                <div class="answer-text">
                    {{test.answers[0].text}}
                </div>
            </div>
            <div class="answer-description-wrapper">
                <div class="desc-icon">
                    ,,
                </div>
                <div class="desc-text">
                    {{test.answers[0].desc}}
                </div>
            </div>
            <div class="correct-answers" v-if="!test.correct">
                <ul class="correct-answers-list">
                    <li
                            v-for="(answer, key) of test.correctAnswers"
                            :key="key"
                            class="correct-answer"
                    >
                        <span class="correct-answer-icon">

                        </span>
                        <span class="correct-answer-text">
                            {{answer.text}}
                        </span>
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<script>
    export default {
        name: "Answers",
        props: {
            response: Array
        }
    }
</script>

<style scoped>
    .correct-answer-text {
        letter-spacing: -0.078px;
        font-size: 14px;
        line-height: 22px;
        color: #14B072;
        margin-left: 8px;
    }
    .correct-answers-list {
        margin-top: 24px;
    }
    .correct-answer {
        display: flex;
        margin-top: 16px;
    }
    .answer {
        margin-top: 16px;
        border: 1px solid #EAECEC;
        border-radius: 16px;
        padding: 16px;
    }
    .answer-description-wrapper {
        margin-top: 16px;
        display: flex;
    }
    .desc-text {
        margin-left: 8px;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.078px;
        color: #ADB3BC;
    }
    .desc-icon {
        letter-spacing: -0.078px;
        font-style: normal;
        font-weight: normal;
        font-size: 100px;
        line-height: 22px;
        color: #EAECEC;
        position: relative;
        top: -22px;
        font-family: Lancelot;
    }
    .answer .answer-status, .correct-answer-icon {
        width: 22px;
        min-width: 22px;
        height: 22px;
        background-image: url(../../../assets/images/selected.svg);
    }
    .answer.wrong .answer-status {
        background-image: url(../../../assets/images/wrong.svg);
    }
    .answer.wrong .answer-text {
        color: #FC5A5A;
    }
    .answer-content {
        display: flex;
    }
    .answer-title {
        color: #61707D;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 13px;
        line-height: 22px;
    }
    .answer-content {
        margin-top: 16px;
    }
    .answer-text {
        color: #14B072;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.078px;
        margin-left: 8px;
    }
</style>