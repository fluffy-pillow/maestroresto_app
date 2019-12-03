<template>
    <v-ons-page class="dashboard" id="dashboard">
        <User></User>
        <div class="bg-circles">
            <svg width="293" height="303" viewBox="0 0 293 303" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="146.5" cy="146.5" r="146" stroke="#F2F4F5"/>
                <circle cx="156.5" cy="176.5" r="126" stroke="#F2F4F5"/>
            </svg>
        </div>
        <main>
            <Statistics :status="status" :leaderboard="leaderboard" :loyalty="loyalty"></Statistics>
            <Tasks :required="required"></Tasks>
            <Courses :unfinished-courses="unfinishedCourses"></Courses>
            <Tests :unfinished-tests="unfinishedTests"></Tests>
        </main>
    </v-ons-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import User from "@/components/DashboardPage/User/User";
    import dashboardDB from "@/db/dashboardDB";
    import DashboardService from '@/services/DashboardService'
    import Statistics from "../components/DashboardPage/Statistics/Statistics";
    import Tasks from "../components/DashboardPage/Tasks/Tasks";
    import Courses from "../components/Courses/Courses";
    import Tests from "../components/DashboardPage/Tests/Tests";


    export default {
        name: "Dashboard",
        components: {
            Tests,
            Courses,
            Tasks,
            Statistics,
            User,
        },
        data () {
            return {
                status: null,
                leaderboard: null,
                loyalty: null,
                required: null,
                unfinishedCourses: null,
                unfinishedTests: null,
                bLoaded: false
            }
        },
        methods: {
            ...mapActions({
                systemMessage: 'systemMessage/systemMessage'
            }),
            writeData (response) {
                this.status = response.rating.status
                this.leaderboard = response.rating.leaderboard
                this.loyalty = response.rating.loyalty
                this.required = response.required
                this.unfinishedCourses = response.unfinishedCourses
                this.unfinishedTests = response.unfinishedTests
            },
            hidePreloaders () {
                if (!this.bLoaded) {
                    setTimeout(() => {
                        this.bLoaded = true
                    }, 200)
                }
            },
            localDBRequest () {
                dashboardDB.getData(response => {
                    if (!response.error) {
                        this.writeData(response)
                        this.hidePreloaders()
                    } else {
                        this.localDBerror = true
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
                        this.writeData(response.data)
                        this.hidePreloaders()

                        if (this.localDBerror) {
                            dashboardDB.insertData(response.data)
                        } else {
                            dashboardDB.updateData(response.data)
                        }
                    }

                })
            },
        },
        computed: {
            ...mapGetters({
                token: 'user/getToken'
            })
        },
        mounted () {
            this.localDBRequest()
        }
    }
</script>

<style scoped>
.bg-circles {
  position: absolute;
  top: -88px;
  left: -75px;
  z-index: -1;
}

main {
    padding-bottom: 64px;
    padding-top: 44px;
}

.dashboard {
  background-color: #ffffff !important
}
</style>
