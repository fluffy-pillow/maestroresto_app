<template>
    <v-ons-page class="material">
        <StickyHeader :title="'Урок №1'"
        >
            <FavoriteButton class="favorite-button" slot="rightSideContent"></FavoriteButton>
        </StickyHeader>

        <main>
            <div class="container">
                <div class="title">
                    Правило “открытой руки”.
                    Подача блюда/напитки
                    гостю по этикету.
                </div>
                <div class="image" >
                    <!--                <img :src="require('@/assets/uploads/material-image.png')">-->
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg">
                </div>
                <section class="desc">
                    <div class="desc-title">
                        Описание курса
                    </div>
                    <p class="desc-text">
                        Открывая ресторанный бизнес, Вы можете идти по пути инвестиции денег в проект, создаваемый «с нуля», а можете купить уже кем-то сделанный, налаженный ресторан. В мировой практике – сначала создать идею, а потом уже подыскать для неё помещение.

                        Обратитесь к услугам специалистов. Они проведут полное профессиональное исследование. А именно: изучат соответствующие параметры:

                        а) потоки людей в непосредственной близости от помещения, т.е. выяснят приблизительную структуру и платежеспособность потенциальных клиентов

                        б) конкурентное окружение. То есть изучат конкурентов, их концепции, дизайн, посещаемость, клиентов, работу персонала и «средний чек».

                        в) основные здания и сооружения вблизи будущего ресторана,

                        г) удобство подъезда, наличие парковки,

                        д) возможности внешнего оформления;

                        Проведение такого исследования специалистами обойдется в 3-5 тысяч зелёных рублей. Бизнес-план на два года -- в 500 долларов. Имея подобное маркетинговое исследование, ошибиться почти невозможно.
                    </p>

                    <Video :video="video" :video-name="videoName"></Video>

                    <p class="desc-text">
                        Открывая ресторанный бизнес, Вы можете идти по пути инвестиции денег в проект, создаваемый «с нуля», а можете купить уже кем-то сделанный, налаженный ресторан. В мировой практике – сначала создать идею, а потом уже подыскать для неё помещение.
                    </p>

                    <Audio :audio="audio" :audio-name="audioName"></Audio>

                    <p class="desc-text">
                        Открывая ресторанный бизнес, Вы можете идти по пути инвестиции денег в проект, создаваемый «с нуля», а можете купить уже кем-то сделанный, налаженный ресторан. В мировой практике – сначала создать идею, а потом уже подыскать для неё помещение.
                    </p>

                    <DocFile :name="docFileName"></DocFile>

                    <p class="desc-text">
                        Открывая ресторанный бизнес, Вы можете идти по пути инвестиции денег в проект, создаваемый «с нуля», а можете купить уже кем-то сделанный, налаженный ресторан. В мировой практике – сначала создать идею, а потом уже подыскать для неё помещение.
                    </p>

                </section>

                <div class="material-footer">
                    <div class="material-status-info">
                        <div class="material-status-info-title">
                            Пройдите тест, чтобы закрепить свои знания.
                        </div>
                        <div class="material-status-info-desc">
                            9 вопросов / 5 минут времени
                        </div>
                        <div class="material-status-info-rating">
                            <Stars class="stars" :offset="6.4" :size="22" :level="1"></Stars>
                            <div class="material-status-info-rating-details">
                                Результат 2.5 из 3
                            </div>
                        </div>
                    </div>

                    <button class="submit" @click="handleClick">
                        Пройдено
                    </button>
                </div>
            </div>

        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/StickyHeader";
    import FavoriteButton from "../components/FavoriteButton";
    import DocFile from "../components/DocFile";
    import Stars from "../components/Stars";
    import Video from "../components/Video";
    import MaterialPassed from "../components/ActionSheetContent/MaterialPassed";
    export default {
        name: "Material",
        components: {Video, Stars, DocFile, FavoriteButton, StickyHeader},
        data () {
            return {
                videoName: 'Название видео',
                video: "http://techslides.com/demos/sample-videos/small.mp4",
                audio: "https://hpr.dogphilosophy.net/test/wav.wav",
                audioName: 'audio №1',
                docFileName: 'Управление рестараном.doc'
            }
        },
        methods: {
            handleClick () {
                this.$eventBus.$emit('open-action-sheet', MaterialPassed)
            }
        }
    }
</script>

<style scoped>
.favorite-button {
    margin-left: auto;
}

main {
    padding-top: 44px;
}

.material-status-info {
    padding-top: 19px;
    padding-bottom: 16px;
    background: rgba(239, 241, 242, 0.5);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding-left: 11px;
    padding-right: 11px;
}

.stars {
    margin-top: 16px;
    justify-content: center;
}

.material-status-info-desc {
    letter-spacing: 0.04px;
    font-weight: 300;
    font-size: 13px;
    text-align: center;
    line-height: 26px;
    margin-top: 16px;
}

.material-status-info-title {
    letter-spacing: 0.04px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
    text-align: center;
}

.container {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 88px;
}

.title {
    margin-top: 32px;
    line-height: 30px;
    letter-spacing: 0.04px;
    color: #000000;
    font-weight: 300;
    font-size: 24px;
}

.image {
    margin-top: 10px;
    width: 100%;
    height: auto;
}

.image img {
    width: 100%;
    height: auto;
}

.desc {
    margin-top: 10px;
}

.desc-text {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.078px;
    color: #4B4B4B;
    margin-top: 8px;
    margin-bottom: 8px;
}

.video-outer, .audio-outer, .doc-file-outer {
    padding-top: 16px;
    padding-bottom: 16px;
}

.material-footer {
    padding-top: 56px;
    padding-bottom: 45px;
}

.submit {
    background: #3DD498;
    border: 1px solid #3DD498;
    box-sizing: border-box;
    border-radius: 16px;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    width: 100%;
    height: 50px;
    margin-top: 16px;
}

.material-status-info-rating-details {
    margin-top: 16px;
    text-align: center;
    letter-spacing: 0.04px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    padding-bottom: 16px;
}

</style>