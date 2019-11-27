<template>
    <v-ons-page class="main-menu-slug">
        <StickyHeader :color="(bShowStickyHeader) ? 'white' : 'transparent'"
        >
        </StickyHeader>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <main>
                <carousel :per-page="1"
                          :center-mode="true"
                          :pagination-position="'bottom-overlay'"
                          :pagination-size="8"
                          :pagination-color="'#FFFFFF'"
                          :pagination-active-color="'rgba(255, 255, 255, 0.5)'"
                          class="carousel"
                >
                    <slide class="slide">
                        <img src="https://s2.eda.ru/StaticContent/Photos/120131090202/120726192046/p_O.jpg">
                    </slide>
                    <slide class="slide">
                        <img src="https://s2.eda.ru/StaticContent/Photos/120131090202/120726192046/p_O.jpg">
                    </slide>
                </carousel>
                <div class="body">
                    <div class="short-desc">
                        <div class="type">
                            <div class="type-icon">

                            </div>
                            <div class="type-name">
                                Горячее
                            </div>
                        </div>

                        <div class="title">
                            Лодочки из картофеля
                        </div>
                        <div class="weight">
                            250 гр.
                        </div>
                    </div>

                    <div class="desc">
                        <div class="duration-block">
                            <div class="duration-icon">
                            </div>
                            <div class="duration-title">
                                Время приготовления 60 минут
                            </div>
                        </div>
                        <p>
                            Лодочки из картофеля с мясной начинкой – оригинальный вариант фаршированного картофеля, который украсит даже праздничный стол. При этом рецепт простой и требуется только набор самых доступных продуктов без «экзотики». Ориентировочное время приготовления в духовке – 60 минут.
                        </p>

                        <Audio :audio="audio" :audio-name="audioName"></Audio>

                        <Video :video="video"></Video>

                        <Composition></Composition>
                        <Allergens></Allergens>
                        <Characteristics></Characteristics>
                    </div>
                </div>
            </main>
        </div>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import Composition from "../components/FavoritePage/MainMenuPage/Slug/Composition";
    import Allergens from "../components/FavoritePage/MainMenuPage/Slug/Allergens";
    import Characteristics from "../components/FavoritePage/MainMenuPage/Slug/Characteristics";
    export default {
        name: "Slug",
        components: {Characteristics, Allergens, Composition, StickyHeader},
        data () {
            return {
                bShowStickyHeader: false,
                audio: "https://hpr.dogphilosophy.net/test/wav.wav",
                audioName: 'audio №1',
                video: "http://techslides.com/demos/sample-videos/small.mp4"
            }
        },
        methods: {
            handleScroll () {
                this.bShowStickyHeader = (this.$refs.pageContent.scrollTop > 0)
            }
        }

    }
</script>

<style scoped>
    .main-menu-slug {
        -webkit-overflow-scrolling: touch
    }

    .container {
        height: 44px;
        display: flex;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
    }

    .video-outer {
        margin-top: 16px;
    }

    .slide {
        width: 100%;
        overflow: hidden;
    }

    .slide img {
        width: auto;
        height: 100%;
        margin-left: -25%;
    }

    .carousel {
        height: calc(331px + env(safe-area-inset-top) * 7);
        justify-content: flex-end;
    }

    .VueCarousel-wrapper {
        overflow-x: hidden;
    }


    .body {
        position: relative;
        top: -16px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        background-color: #ffffff;
        padding-left: 16px;
        padding-right: 16px;
    }

    .short-desc {
        padding-top: 40px;
        padding-bottom: 16px;
        border-bottom: 1px solid #EFF1F2;
        position: relative;
    }

    .title {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 0.04px;
        color: #000000;
    }

    .weight {
        letter-spacing: 0.16px;
        color: #61707D;
        opacity: 0.7;
        font-size: 12px;
        line-height: 16px;
        margin-top: 8px;
    }

    .type {
        position: absolute;
        background: #FFC542;
        border-radius: 53px;
        height: 30px;
        min-width: 77px;
        display: flex;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        top: -15px;
    }

    .type-icon {
        width: 20px;
        height: 20px;
        min-width: 20px;
        background-image: url(../assets/images/hot.svg);
    }

    .type-name {
        margin-left: 10px;
        font-size: 12px;
        line-height: 14px;
        font-feature-settings: 'liga' off, 'kern' off;
        color: #FFFFFF;
    }

    .duration-block {
        margin-top: 16px;
        display: flex;
        align-items: center;
    }

    .duration-icon {
        background-image: url(../assets/images/clock.svg);
        width: 32px;
        min-width: 32px;
        height: 32px;
        background-size: 18px 18px;
        background-repeat: no-repeat;
        background-color: rgba(97,112,125, 0.1);
        background-position: center center;
        border-radius: 10px;

    }

    .duration-title {
        letter-spacing: 0.16px;
        font-size: 14px;
        line-height: 16px;
        margin-left: 16px;
        color: #61707D;
    }


    p {
        margin-top: 24px;
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.078px;
        color: #4B4B4B;
    }

    main {
        padding-bottom: 81px;
        overflow: hidden;
    }

</style>