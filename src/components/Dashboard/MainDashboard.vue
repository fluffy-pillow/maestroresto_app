<template>
    <main class="main-dashboard">
        <Statistics></Statistics>
        <Tasks></Tasks>
        <Courses></Courses>
        <Tests></Tests>
    </main>
</template>

<script>
    import Statistics from "./Statistics/Statistics";
    import Tasks from "./Tasks/Tasks";
    import Courses from "./Courses/Courses";
    import Tests from "./Tests/Tests";

    export default {
        name: "MainDashboard",
        components: {Tests, Courses, Tasks, Statistics}
    }
</script>

<style scoped>
.main-dashboard {
    padding-bottom: 64px;
}
</style>