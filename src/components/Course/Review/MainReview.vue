<template>
    <main class="main-review">
        <ReviewDesc
                :title="'Описание курса'"
                :text="'В процессе обучения вы получите знания и навыки, необходимые официанту в общении с гостем — правила поведения, этикет, встреча и приветствие гостя, психотипы гостей. Научитесь разбираться в меню, а так же в классификации и\n'+
'видах алкогольных напитков, в правилах их подачи и употребления.'"
        >
        </ReviewDesc>
        <ReviewDesc :title="'Что тебя ждет?'">
            <ReviewParamsList>
                <ReviewParamsItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
                >
                </ReviewParamsItem>
            </ReviewParamsList>
        </ReviewDesc>
        <ReviewDesc
                :title="'Результат итоговой аттестацииа'"
                :text="'Пройдите успешно обучение и сдайте итоговую аттестацию, чтобы увидеть результат'"
        >
        </ReviewDesc>

    </main>
</template>

<script>
    import ReviewDesc from "./ReviewDesc";
    import ReviewParamsList from "./ReviewParamsList";
    import ReviewParamsItem from "./ReviewParamsItem";
    export default {
        name: "MainReview",
        components: {ReviewParamsItem, ReviewParamsList, ReviewDesc},
        data () {
            return {
                items: [
                    {
                        text: '12 занятий',
                        type: 'training'
                    },
                    {
                        text: '90 минут',
                        type: 'time'
                    },
                    {
                        text: 'Видео- и аудио\n' +
                        'материалы',
                        type: 'materials'
                    },
                    {
                        text: 'Тестирование',
                        type: 'type'
                    },
                    {
                        text: 'Итоговая аттестация',
                        type: 'certification'
                    }
                ]
            }
        }

    }
</script>

<style scoped>
.main-review {
    padding-bottom: calc(225px + constant(safe-area-inset-top));
    padding-bottom: calc(225px + env(safe-area-inset-top));
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 396px;
    background: #ffffff;
    position: sticky;
    top: 0;
}

</style>