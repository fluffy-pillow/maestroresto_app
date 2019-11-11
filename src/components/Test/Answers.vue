<template>
    <ul class="answers">
        <li class="answer"
            v-for="(answer, key) of answers"
            :key="key"
            @click="handleClick(answer.id)"
            :class="{
                selected: $parent.selectedAnswer === answer.id && !$parent.wrongAnswer,
                wrong: $parent.selectedAnswer === answer.id && $parent.wrongAnswer,
                correct: $parent.correctAnswer === answer.id && $parent.wrongAnswer
             }"
        >
            <span class="top">
                <span class="text">
                    {{answer.text}}
                </span>
                <span class="answer-status">
                </span>
            </span>
            <span class="bottom" v-if="$parent.selectedAnswer === answer.id && $parent.wrongAnswer">
                <span class="bottom-icon">
                    ,,
                </span>
                <span class="desc">
                    {{answer.desc}}
                </span>
            </span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Answers",
        props: {
            answers: Array
        },
        methods: {
            handleClick (newValue) {
                if (!this.$parent.bSubmit) {
                    this.$parent.selectedAnswer = newValue
                }
            }
        }
    }
</script>

<style scoped>
    .answer.selected, .answer.correct {
        border: 1px solid #3DD498;
    }

    .answer.wrong {
        border: 1px solid #FC5A5A;
    }

    .top {
        align-items: center;
        justify-content: space-between;
        display: flex;
    }

    .bottom {
        margin-top: 21px;
        justify-content: space-between;
        display: flex;
    }

    .bottom-icon {
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

    .answer {
        border: 1px solid #EAECEC;
        border-radius: 16px;
        padding: 16px;
        margin-bottom: 16px;
    }

    .desc {
        letter-spacing: -0.078px;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #ADB3BC;
        margin-left: 4px;
    }

    .text {
        color: #61707D;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 22px;
    }


    .answer-status {
        min-width: 22px;
        margin-left: 21px;
        width: 22px;
        height: 22px;
        background-image: url(../../assets/images/select.svg);
        background-size: cover;
    }

    .answer.selected .answer-status {
        background-image: url(../../assets/images/selected.svg);
    }

    .answer.wrong .answer-status {
        background-image: url(../../assets/images/wrong.svg);
    }
</style>