<template>
    <main class="main-dashboard">
        <Statistics :status="status" :leaderboard="leaderboard" :loyalty="loyalty"></Statistics>
        <Tasks></Tasks>
        <Courses></Courses>
        <Tests></Tests>
    </main>
</template>

<script>
    import DashboardService from '@/services/DashboardService'
    import {mapGetters} from 'vuex'

    import Statistics from "./Statistics/Statistics";
    import Tasks from "./Tasks/Tasks";
    import Courses from "./Courses/Courses";
    import Tests from "./Tests/Tests";

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
                loyalty: {}
            }
        },
        mounted () {
 /*         console.log(this.token)
          DashboardService.getDashboardData(this.token, response => {
              if (response.data) {
                console.log(response.data)
                this.status = response.data.rating.status
                this.leaderboard = response.data.rating.leaderboard
                this.loyalty = response.data.rating.loyalty
              }
          })*/
        }
    }
</script>

<style scoped>
.main-dashboard {
    padding-bottom: 64px;
    padding-top: calc(44px - env(safe-area-inset-top));
}
</style>