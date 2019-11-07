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

                <Video :video="video" :video-name="videoName">
                </Video>

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
                <button class="submit">
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
        }
    }
</script>

<style scoped>

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
    display: flex;
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
}
</style>