<template>
    <section class="review">
        <div class="review-desc">
            <h4 class="title">Описание курса</h4>
            <p class="text">
                В процессе обучения вы получите знания и навыки, необходимые официанту в общении с гостем — правила поведения, этикет, встреча и приветствие гостя, психотипы гостей. Научитесь разбираться в меню, а так же в классификации и
                видах алкогольных напитков, в правилах их подачи и употребления
            </p>
        </div>

        <div class="review-desc">
            <h4 class="title">Что тебя ждет</h4>
            <ReviewInfo :items="items"></ReviewInfo>
        </div>

        <div class="review-desc">
            <h4 class="title">Результат итоговой аттестации</h4>
            <p class="text">
                Пройдите успешно обучение и сдайте итоговую аттестацию, чтобы увидеть результат
            </p>
        </div>
    </section>
</template>

<script>
    import ReviewInfo from "../Lists/ReviewInfo/ReviewInfo";
    export default {
        name: "Review",
        components: {ReviewInfo},
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
.review {
    padding-left: 16px;
    padding-right: 16px;
    background: #ffffff;
    position: sticky;
    top: 0;
    padding-bottom: 250px;
}

.review-desc {
    padding-top: 24px;
}


.title {
    text-transform: uppercase;
}

.text {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.078px;
    color: #4B4B4B;
    margin-top: 8px;
}
</style>