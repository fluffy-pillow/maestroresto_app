<template>
    <v-ons-page class="main-course">
        <AdditionalHead v-show="bShowAdditionalHeader"></AdditionalHead>
        <Head :style="{transform: 'translateY(' + (0 - positionY) + 'px)'}"></Head>
        <v-ons-toolbar static class="segment-container"
           :style="{transform: 'translateY(' + (399 - positionY) + 'px)'}"
        >
            <v-ons-segment class="segment"
                           tabbar-id="course"
                           :index.sync="segmentIndex"
            >
                <button>Обзор курса</button>
                <button>Материалы</button>
            </v-ons-segment>
        </v-ons-toolbar>
        <v-ons-tabbar id="course"
                      :tabs="tabs"
                      :index.sync="tabbarIndex"
        >
        </v-ons-tabbar>
    </v-ons-page>
</template>

<script>
    import Review from '@/pages/Course/Review'
    import Materials from '@/pages/Course/Materials'
    import Head from "./Head";
    import AdditionalHead from "./AdditionalHead";

    export default {
        name: "MainCourse",
        components: {AdditionalHead, Head},
        data () {
            return {
                segmentIndex: 0,
                tabbarIndex: 0,
                bShowAdditionalHeader: false,
                positionY: 0,
                tabs: [
                    {
                        page: Review,
                        key: "Review",
                    },
                    {
                        page: Materials,
                        key: "Materials",
                    }
                ]
            }
        },
        mounted () {
            let that = this
            this.$eventBus.$on('change-position-y', function (e) {
                that.positionY = e
            })
        },
        watch: {
            tabbarIndex: function () {
                this.$eventBus.$emit('fix-position-y', this.positionY)
            },
            positionY: function () {
                this.bShowAdditionalHeader = (this.positionY > 450)
            }
        },
    }
</script>

<style scoped>
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

    .container {
        position: absolute;
        bottom: 0;
    }

    .main-course {
        -webkit-overflow-scrolling: touch
    }
</style>