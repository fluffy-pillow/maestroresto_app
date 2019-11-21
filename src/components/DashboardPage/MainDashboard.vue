<template>
    <main class="main-dashboard">
        <Statistics :status="status" :leaderboard="leaderboard" :loyalty="loyalty"></Statistics>
        <Tasks :required="required"></Tasks>
        <Courses :unfinished-courses="unfinishedCourses"></Courses>
        <Tests :unfinished-tests="unfinishedTests"></Tests>
    </main>
</template>

<script>

    import Statistics from "./Statistics/Statistics";
    import Tasks from "./Tasks/Tasks";
    import Courses from "./Courses/Courses";
    import Tests from "./Tests/Tests";

    export default {
        name: "MainDashboard",
        components: {Tests, Courses, Tasks, Statistics},
        props: {
            data: Object
        },
        data () {
            return {
                status: null,
                leaderboard: null,
                loyalty: null,
                required: null,
                unfinishedCourses: null,
                unfinishedTests: null,
            }
        },
        watch: {
            data: function (newValue) {
                this.status = newValue.rating.status
                this.leaderboard = newValue.rating.leaderboard
                this.loyalty = newValue.rating.loyalty
                this.required = newValue.required
                this.unfinishedCourses = newValue.unfinishedCourses
                this.unfinishedTests = newValue.unfinishedTests
            }
        }
    }
</script>

<style scoped>
.main-dashboard {
    padding-bottom: 64px;
    padding-top: 44px;
}
</style>