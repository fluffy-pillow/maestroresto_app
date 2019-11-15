<template>
    <main class="main-dashboard">
        <Statistics :status="status" :leaderboard="leaderboard" :loyalty="loyalty"></Statistics>
        <Tasks :required="required"></Tasks>
        <Courses :unfinished-courses="unfinishedCourses"></Courses>
        <Tests :unfinished-tests="unfinishedTests"></Tests>
    </main>
</template>

<script>
    import DashboardService from '@/services/DashboardService'
    import {mapGetters, mapActions} from 'vuex'

    import Statistics from "./Statistics/Statistics";
    import Tasks from "./Tasks/Tasks";
    import Courses from "./Courses/Courses";
    import Tests from "./Tests/Tests";
    import dashboardDB from "../../db/dashboardDB";

    export default {
        name: "MainDashboard",
        components: {Tests, Courses, Tasks, Statistics},
        computed: {
            ...mapGetters({
                token: 'user/getToken'
            })
        },
        data () {
            return {
                status: {},
                leaderboard: {},
                loyalty: {},
                required: [],
                unfinishedCourses: [],
                unfinishedTests: [],
                localDBerror: false
            }
        },
        methods: {
            ...mapActions({
                systemMessage: 'systemMessage/systemMessage'
            }),
            localDBRequest () {
                dashboardDB.getData(response => {
                    if (!response.error) {
                        this.status = JSON.parse(response.rating).status
                        this.leaderboard = JSON.parse(response.rating).leaderboard
                        this.loyalty = JSON.parse(response.rating).loyalty
                        this.required = JSON.parse(response.required)
                        this.unfinishedCourses = JSON.parse(response.unfinishedCourses)
                        this.unfinishedTests = JSON.parse(response.unfinishedTests)
                    } else {
                        this.localDBerror = true
                        // TODO: preloader
                    }
                    this.serviceRequest()
                })
            },
            serviceRequest () {
                DashboardService.getData(this.token, response => {
                    if (response.error) {
                        this.systemMessage({type: 'error', message: response.error.message, duration: 5000})
                         if (response.error.type === 'USER_NOT_AUTHORIZED') {
                             this.logout()
                         }
                    } else {
                        this.status = response.data.rating.status
                        this.leaderboard = response.data.rating.leaderboard
                        this.loyalty = response.data.rating.loyalty
                        this.required = response.data.required
                        this.unfinishedCourses = response.data.unfinishedCourses
                        this.unfinishedTests = response.data.unfinishedTests

                        if (this.localDBerror) {
                            dashboardDB.insertData(response.data)
                        } else {
                            dashboardDB.updateData(response.data)
                        }
                    }

                })
            },
        },
        mounted () {
            this.localDBRequest()
        }
    }
</script>

<style scoped>
.main-dashboard {
    padding-bottom: 64px;
    padding-top: calc(44px - env(safe-area-inset-top));
}
</style>