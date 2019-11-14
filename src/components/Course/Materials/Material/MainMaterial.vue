<template>
    <main class="main-material">
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
                        <ul class="stars">
                            <li v-for="loopLevel in 3" :key="loopLevel">
                                <i class="star" :class="{burning: loopLevel <= 1}">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M17.6093 8.19264C17.9636 7.84734 18.0887 7.34058 17.9358 6.86949C17.7827 6.39841 17.3837 6.06212 16.8935 5.99076L12.5351 5.35748C12.3495 5.33044 12.1891 5.21403 12.1062 5.0457L10.1577 1.0968C9.93893 0.653111 9.49488 0.37738 9 0.37738C8.50549 0.37738 8.06144 0.653111 7.84265 1.0968L5.8938 5.04606C5.8109 5.21439 5.65014 5.3308 5.46452 5.35784L1.10617 5.99112C0.616343 6.06212 0.216984 6.39877 0.0637999 6.86985C-0.0890235 7.34094 0.0360466 7.84771 0.390352 8.193L3.54378 11.2668C3.67822 11.398 3.73985 11.5868 3.70813 11.7714L2.9642 16.1117C2.89824 16.4938 2.99844 16.8654 3.2457 17.1584C3.62992 17.6151 4.30068 17.7542 4.83701 17.4723L8.73472 15.4229C8.89764 15.3375 9.10273 15.3382 9.26528 15.4229L13.1634 17.4723C13.3529 17.5722 13.5552 17.6226 13.7638 17.6226C14.1448 17.6226 14.506 17.4532 14.7543 17.1584C15.0019 16.8654 15.1018 16.493 15.0358 16.1117L14.2915 11.7714C14.2598 11.5865 14.3214 11.398 14.4559 11.2668L17.6093 8.19264Z" fill="#F2F4F5"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="18" height="18" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </i>
                            </li>
                        </ul>
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
</template>

<script>
    import Video from "../../../Video";
    import Audio from "../../../Audio";
    import DocFile from "../../../DocFile";
    import MaterialPassed from "./MaterialPassed";
    export default {
        name: "MainMaterial",
        components: {DocFile, Audio, Video},
        data () {
            return {
                videoName: 'Название видео',
                video: "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/7c/Caminandes_-_Gran_Dillama_-_Blender_Foundation's_new_Open_Movie.webm/Caminandes_-_Gran_Dillama_-_Blender_Foundation's_new_Open_Movie.webm.720p.vp9.webm",
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
.main-material {
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
    display: flex;
    justify-content: center;
}


.stars .star {
    width: 22px;
    height: 22px;
}

.stars .star svg {
    width: 100%;
    height: auto;
}

.stars .star.burning svg g path  {
    fill: #FFC542;
}

.stars li {
    margin-left: 6.4px;
}

.stars i {
    display: block;
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