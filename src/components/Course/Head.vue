<template>
    <div class="head">
        <div class="container">
            <div class="top">
                <v-ons-back-button>

                </v-ons-back-button>
                <button class="heart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="bottom">
                <div class="bottom-top">
                    <div class="middle-left">
                        Персонал ресторана и его функциональные обязанности
                    </div>
                    <div class="middle-right">
                        <svg class="chart--svg" width="100%" height="100%" viewBox="0 0 34 34">
                            <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" opacity="0.1"></circle>

                            <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" :stroke-dasharray="57" stroke-dashoffset="25"></circle>
                        </svg>
                        <div class="chart--text">
                            57%
                        </div>
                    </div>
                </div>
                <div class="bottom-bottom">
                    <button class="learning-button">
                        Начать обучение
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>
    .head {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../../assets/images/courses-bg.jpg) !important;
        background-size: cover !important;
        background-position: center center !important;
        position: fixed;
        width: 100%;
        transform: translate3d(0,0,0);
        height: calc(399px + env(safe-area-inset-top) * 4) !important;
        transition: transform 0.01s ease-in-out;
        overflow: hidden;
        z-index: 4;
        top: calc(0px - env(safe-area-inset-top) * 3);
        max-height: calc(399px + env(safe-area-inset-top) * 4) !important;
        display: flex;
        align-items: flex-end;
    }

    .head.transform {
        height: calc(52px + env(safe-area-inset-top));
        max-height: calc(52px + env(safe-area-inset-top));
    }

    .head.transform .heart svg path {
        fill: #F2F4F5;
    }

    .head.transform .heart {
        width: 30px;
        height: 30px;
    }

    .head.transform .back-button {
        background-color: #F2F4F5;
    }

    .head.transform .container{
        background: #ffffff;
    }

    .container {
        padding-left: 16px;
        padding-right: 16px;
        background: transparent;
        transition: background 0.2s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - env(safe-area-inset-top) * 4);
    }

    .back-button {
        background-color: rgba(255, 255, 255, 0.4);
        width: 30px;
        height: 30px;
        padding: 0;
        background-image: url(../../assets/images/arrow-left-white.svg);
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 50%;
        transition: background 0.2s ease-in-out;
    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 52px;
    }

    .heart {
        width: 24px;
        height: 24px;
        transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    }

    .heart svg {
        width: 100%;
        height: auto;
    }

    .heart svg path {
        fill: #ffffff;
        transition: fill 0.2s ease-in-out;
    }

    .bottom {
        margin-top: 157px;
        display: flex;
        flex-direction: column;
    }

    .bottom-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .bottom-bottom {
        margin-top: 24px;
        padding-bottom: 28px;
    }

    .middle-left {
        letter-spacing: 0.16px;
        color: #FFFFFF;
        font-size: 24px !important;
        line-height: 30px;
        font-weight: 300 !important;
        white-space: initial;
        text-align: left;
    }

    .middle-right {
        position: relative;
        width: 44px;
        min-width: 44px;
        height: 44px;
        margin-left: 39px;
    }


    .chart--text {
        position: absolute;
        letter-spacing: 0.16px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        left: 50%;
        text-align: center;
    }


    .chart--svg {
        display: block !important;
    }

    .learning-button {
        background: #3DD498;
        border: 1px solid #3DD498;
        box-sizing: border-box;
        border-radius: 16px;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        height: 50px;
        width: 100%;
    }

</style>