<template>
    <div class="head">
        <div class="controls">
            <div class="container">
                <v-ons-back-button>

                </v-ons-back-button>
            </div>
        </div>
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
    </div>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>
    .slide {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .carousel {
        height: 331px;
    }

    .VueCarousel-wrapper {
        overflow-x: hidden;
    }

    .head {
        height: 331px;
        position: relative;
    }

    .controls {
        height: 44px;
        position: absolute;
        width: 100%;
        z-index: 1;
        display: flex;
    }

    .container {
        display: flex;
        padding-left: 16px;
        padding-right: 16px;
        height: inherit;
        width: 100%;
        align-items: center;
    }

    .back-button {
        background-color: rgba(255, 255, 255, 0.1);
        width: 30px;
        height: 30px;
        padding: 0;
        background-image: url(../../../../assets/images/arrow-left-white.svg);
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 50%;

    }
</style>