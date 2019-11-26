<template>
    <div class="loaded-screen">
        <div class="head">
            <div class="container">
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
            <div class="tabs">
                <button class="tab"
                        v-for="(tab, key) of tabs"
                        :key="key"
                        :class="{active: key === activeTab}"
                        @click="changeActiveTab(key)"
                >
                            <span class="tab-text">
                                {{tab.name}}
                            </span>
                </button>
            </div>
        </div>
        <div class="pages-outer">
            <div class="pages-inner" :class="animationType">
                <Review></Review>
                <Materials></Materials>
            </div>
        </div>
    </div>
</template>

<script>
    import Review from "@/pages/Course/Review";
    import Materials from "@/pages/Course/Materials";
    export default {
        name: "LoadedScreen",
        components: {Materials, Review},
        data () {
            return {
                activeTab: 0,
                animationType: 'scrollLeft',
                tabs: [
                    {
                        name: 'Обзор курса'
                    },
                    {
                        name: 'Материалы'
                    }
                ]
            }
        },
        methods: {
            changeActiveTab (newValue) {
                this.activeTab = newValue
            }
        },
        watch: {
            activeTab (newValue) {
                this.animationType = (newValue === 1) ?'scrollRight' : 'scrollLeft'
            }
        }

    }
</script>

<style scoped>
    .tabs {
        height: 52px;
        width: 100%;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EFF1F2;
    }

    .tab {
        width: 50%;
        height: 51px;
        font-size: 16px;
        color: #4B4B4B;
        display: flex;
        justify-content: center;
    }

    .tab-text {
        border-bottom: 3px solid transparent;
        height: 48px;
        line-height: 48px
    }

    .tab.active .tab-text {
        border-bottom: 3px solid #3DD498 !important;
    }


    .segment-container {
        height: 50px !important;
        flex-direction: column !important;
        background-color: transparent !important;
        display: flex;
        justify-content: flex-end;
        background-image: unset !important;
        opacity: 1;
        visibility: visible;
        top: env(safe-area-inset-top) !important;
        box-shadow: none !important;
    }

    .segment {
        min-width: 100%;
        display: flex;
        box-shadow: none;
        min-height: 50px;
        border-bottom: 1px solid #EFF1F2 !important;
        background-color: #ffffff;
    }
    .head {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../../assets/images/courses-bg.jpg) !important;
        background-size: cover !important;
        background-position: center center !important;
        width: 100%;
        transform: translate3d(0,0,0);
        overflow: hidden;
        z-index: 4;
        padding-top: env(safe-area-inset-top);
        height: calc(446px + env(safe-area-inset-top) * 7) !important;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }


    .container {
        padding-left: 16px;
        padding-right: 16px;
        background: transparent;
        display: flex;
        flex-direction: column;
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

    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 44px;
    }

    .heart {
        width: 24px;
        height: 24px;
    }

    .heart svg {
        width: 100%;
        height: auto;
    }

    .heart svg path {
        fill: #ffffff;
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

    .pages-inner {
        display: flex;
        transform: translateX(0);
        transition: transform 0.2s ease-in-out;
    }

    .pages-outer {
        overflow: hidden;
    }

    .pages-inner.scrollRight {
        transform: translateX(-100vw);
    }

    .pages-inner.scrollLeft .materials {
        height: 0px;
        overflow: hidden;
    }
    .pages-inner.scrollRight .review {
        height: 0px;
        overflow: hidden;
    }


    .loaded-screen {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .loaded-screen.show {
        opacity: 1;
    }

    .pages-inner.scrollLeft {
        transform: translateX(0vw);
    }

</style>