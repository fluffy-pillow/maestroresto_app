<template>
    <v-ons-toolbar static class="header">
        <div class="center">

                <div class="back-button-wrapper header-item">
                    <v-ons-back-button>

                    </v-ons-back-button>
                </div>
                <div class="count header-item">
                  вопрос {{$route.params.id}} из 3
                </div>
                <div class="header-item"></div>
            </div>
<!--            <div class="header-bottom">
                <div class="question">
                    Как правильно раскладывать приборы?
                </div>
            </div>-->

    </v-ons-toolbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header {
        background: #3DD498 !important;
        z-index: 999999;
        box-shadow: none !important;
        height: calc(44px + env(safe-area-inset-top)) !important;
        display: flex;
        align-items: flex-end;
    }

    .center {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        height: 44px !important;
        line-height: 44px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-bottom {
        padding-top: 16px;
        padding-bottom: 21px;
    }


    .back-button {
        background: rgba(97, 112, 125, 0.1);
        width: 30px;
        height: 30px;
        padding: 0;
        background-image: url(../../assets/images/arrow-left-white.svg);
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 50%;
    }

    .count {
        color: #FFFFFF;
        font-size: 14px;
        line-height: 22px;
        font-weight: normal;
        text-transform: uppercase;
    }

    .header-item {
        flex: 1;
    }

    .question {
        color: #FFFFFF;
        letter-spacing: 0.16px;
        font-weight: 300;
        font-size: 24px;
        line-height: 30px;
        font-feature-settings: 'case' on;
        white-space: initial;
        text-align: left;
        padding-left: 16px;
    }
</style>