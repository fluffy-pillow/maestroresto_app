<template>
    <v-ons-page class="main-course">
        <v-ons-toolbar static class="segment-container">
        <v-ons-segment class="segment" tabbar-id="course" :index.sync="segmentIndex">
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

    export default {
        name: "MainCourse",
        data () {
            return {
                segmentIndex: 0,
                tabbarIndex: 0,
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
        }
    }
</script>

<style scoped>
    .toolbar {
        height: calc(50px + env(safe-area-inset-top)) !important;
        flex-direction: column !important;
        background-color: #ffffff !important;
        background-image: unset !important;
    }

    .segment {
        min-width: 100%;
        display: flex;
        box-shadow: none;
        min-height: 45px;
        border-bottom: 1px solid #EFF1F2 !important;
        background-color: #ffffff;
    }

    .container {
        position: absolute;
        bottom: 0;
    }
</style>