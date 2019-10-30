<template>
    <v-ons-page class="main-course">
        <Head :class="{transform: bTransform}"></Head>
        <v-ons-toolbar static class="segment-container" :class="{transform: bTransform}">
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

    export default {
        name: "MainCourse",
        components: {Head},
        data () {
            return {
                segmentIndex: 0,
                tabbarIndex: 0,
                bTransform: false,
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
        created () {
            let that = this
            this.$eventBus.$on('transform-course-header', function (e) {
                that.bTransform = e
            })
        }
    }
</script>

<style scoped>
    .toolbar {
        height: 50px !important;
        flex-direction: column !important;
        background-color: transparent !important;
        display: flex;
        justify-content: flex-end;
        background-image: unset !important;
        transform: translateY(399px);
        opacity: 1;
        visibility: visible;
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
        top: env(safe-area-inset-top) !important;
        box-shadow: none !important;
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