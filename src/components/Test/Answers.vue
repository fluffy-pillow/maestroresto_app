<template>
    <ul class="answers" :class="$parent.color">
        <li class="answer"
            v-for="(answer, key) of answers"
            :key="key"
            @click="handleClick(answer.id)"
            :class="{
                selected: isSelected(answer),
                wrong: isWrong(answer),
                correct: isCorrect(answer)
             }"
        >
            <span class="top">
                <span class="text">
                    {{answer.text}}
                </span>
                <span class="answer-status">
                </span>
            </span>
            <span class="bottom" v-if="isWrong(answer)">
                <span class="bottom-icon">
                    ,,
                </span>
                <span class="desc">
                    {{answer.desc}}
                </span>
            </span>
        </li>
        <li v-if="testType === 'another'">
            <div class="answer-input-wrapper">
                <span class="answer-input-title">
                    свой вариант ответа
                </span>
                <span class="answer-variant">
                    г.
                </span>
                <ContentEditable
                        class="answer-input"
                        :content="$parent.anotherAnswer"
                        @update="$parent.anotherAnswer = $event"
                        @onFocus="handleFocus"
                        @onBlur="handleBlur"
                >
                </ContentEditable>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import ContentEditable from "../ContentEditable";

    export default {
        name: "Answers",
        components: {ContentEditable},
        props: {
            answers: Array,
            testType: String
        },
        methods: {
            handleFocus () {
                this.$parent.bFocus = true
                this.$parent.$parent.$parent.$refs.test.$el.querySelector('.page__content').scrollTop = 10000000
            },
            handleBlur () {
                this.$parent.bFocus = false
            },
            handleClick (newValue) {
              if (!this.$parent.bSubmit) {
                  switch (this.testType) {
                      case 'default': {
                          this.currentTestSavedData.answer = newValue
                          break
                      }
                      case 'multi': {
                          let index = this.currentTestSavedData.answer.indexOf(newValue)
                          if (index > -1) {
                              this.currentTestSavedData.answer.splice(index, 1)
                          } else {
                              this.currentTestSavedData.answer.push(newValue)
                          }
                          break
                      }
                      case 'another': {
                          let index = this.currentTestSavedData.answer.indexOf(newValue)
                          if (index > -1) {
                              this.currentTestSavedData.answer.splice(index, 1)
                          } else {
                              this.currentTestSavedData.answer.push(newValue)
                          }
                          break
                      }
                      default: {
                          break
                      }
                  }

              }
            },
            isWrong (answer) {
                let ret
                switch (this.testType) {
                    case 'default': {
                        ret = (this.currentTestSavedData.answer === answer.id && this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    case 'multi': {
                        ret = (this.currentTestSavedData.answer.includes(answer.id) && this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    case 'another': {
                        ret = (this.currentTestSavedData.answer.includes(answer.id) && this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    default: {
                        break
                    }
                }
                return ret
            },
            isSelected (answer) {
                let ret
                switch (this.testType) {
                    case 'default': {
                        ret = (this.currentTestSavedData.answer === answer.id && !this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    case 'multi': {
                        ret = (this.currentTestSavedData.answer.includes(answer.id) && !this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    case 'another': {
                        ret = (this.currentTestSavedData.answer.includes(answer.id) && !this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    default: {
                        break
                    }
                }
                return ret
            },
            isCorrect (answer) {
                let ret
                switch (this.testType) {
                    case 'default': {
                        ret = (this.currentTestSavedData.correctAnswer === answer.id && this.currentTestSavedData.bWrongAnswer)
                        break
                    }
                    case 'multi': {
                        if (this.currentTestSavedData.correctAnswer) {
                            ret = (this.currentTestSavedData.correctAnswer.includes(answer.id) && this.currentTestSavedData.bWrongAnswer)
                        }
                        break
                    }
                    default: {
                        break
                    }
                }
                return ret
            },
            ...mapActions({
                updateSavedData: 'tests/updateSavedData'
            })
        },
        computed: {
            ...mapGetters({
                savedData: 'tests/getSavedData'
            }),
            currentTestSavedData () {
                return this.savedData[this.$route.params.id - 1]
            }
        }
    }
</script>

<style scoped>

    .answers {
        margin-top: 32px;
    }

    .answer.selected, .answer.correct {
        border: 1px solid #3DD498;
    }

    .answers.dark-purple .answer.selected .answer-status {
        background-image: url(../../assets/images/selected-purple.svg);
    }

    .answers.dark-purple .answer.selected, .answers.dark-purple .answer.correct {
        border: 1px solid #415393;
    }

    .answer-input-wrapper {
        display: flex;
        flex-direction: column;
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

    .answer-input-title {
        color: #4B4B4B;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 13px;
        line-height: 22px;
    }

    .answer-variant {
        color: #61707D;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 22px;
        margin-top: 24px;
        margin-left: 16px;
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

    .answer-input {
        height: 50px;
    }
</style>