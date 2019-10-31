<template>
    <v-ons-page class="main-course" @show="onShowPage">
        <AdditionalHead v-if="bShowAdditionalHeader"></AdditionalHead>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <div v-if="bShowPreloadScreen">
                <div class="preload-image-wrapper">
                    <img :src="require('@/assets/images/course-preload-screen.png')">
                </div>
            </div>
            <div v-else>
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
        </div>
    </v-ons-page>
</template>

<script>
    import Review from '@/pages/Course/Review'
    import Materials from '@/pages/Course/Materials'
    import Head from "./Head";
    import AdditionalHead from "./AdditionalHead";

    export default {
        name: "MainCourse",
        components: {Materials, Review, AdditionalHead, Head},
        data () {
            return {
                activeTab: 0,
                animationType: 'scrolLeft',
                segmentIndex: 0,
                tabbarIndex: 0,
                bShowAdditionalHeader: false,
                positionY: 0,
                bShowPreloadScreen: false,
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
            handleScroll () {
                this.bShowAdditionalHeader = (this.$refs.pageContent.scrollTop > 400)
                console.log(this.bShowAdditionalHeader)
            },
            changeActiveTab (newValue) {
                this.activeTab = newValue
            },
            onShowPage () {
                this.bShowPreloadScreen = false
            }
        },
        mounted () {
            let that = this
            this.$eventBus.$on('change-position-y', function (e) {
                that.positionY = e
            })
        },
        watch: {
            activeTab (newValue) {
                this.animationType = (newValue === 1) ?'scrollRight' : 'scrollLeft'
            },
            tabbarIndex: function () {
                this.$eventBus.$emit('fix-position-y', this.positionY)
            },
            positionY: function () {
                this.bShowAdditionalHeader = (this.positionY > 200)
            }
        },
        updated: function () {
            this.$nextTick(function () {
                console.log(1111)
            })
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
        font-size: 16px;
        line-height: 22px;
        color: #4B4B4B;
        display: flex;
        justify-content: center;
        border-bottom: 3px solid transparent;
    }

    .tab.active .tab-text {
        height: 48px;
        line-height: 48px;
        border-bottom: 3px solid #3DD498;
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
        transition: transform 0.01s ease-in-out;
    }

    .toolbar.transform {
        transform: translateY(0px);
        opacity: 0;
        visibility: hidden;
    }

    .segment {
        min-width: 100%;
        display: flex;
        box-shadow: none;
        min-height: 50px;
        border-bottom: 1px solid #EFF1F2 !important;
        background-color: #ffffff;
    }

    .main-course {
        -webkit-overflow-scrolling: touch
    }

    .preload-image-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        top: calc(-44px + env(safe-area-inset-top));
    }

    .preload-image-wrapper img {
        width: 100%;
    }

    .head {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(../../assets/images/courses-bg.jpg) !important;
        background-size: cover !important;
        background-position: center center !important;
        width: 100%;
        transform: translate3d(0,0,0);
        overflow: hidden;
        z-index: 4;
        top: calc(0px - env(safe-area-inset-top) * 3);
    }


    .container {
        padding-left: 16px;
        padding-right: 16px;
        background: transparent;
        transition: background 0.2s ease-in-out;
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
        transition: background 0.2s ease-in-out;
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
    .pages-inner.scrollLeft {
        transform: translateX(0vw);
    }

</style>