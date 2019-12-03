<template>
    <div class="head">
        <vue-content-loading class="title" :width="150" :height="13">
            <rect width="150" height="13" rx="3" fill="#EFF1F2"/>
        </vue-content-loading>


        <vue-content-loading class="arrow" :width="17" :height="13">
            <rect width="17" height="13" rx="3" fill="#EFF1F2"/>
        </vue-content-loading>

    </div>
</template>

<script>
    import VueContentLoading from 'vue-content-loading';

    export default {
        name: "CoursesPreloadHead",
        components: {VueContentLoading},
    }
</script>

<style scoped>
    .title {
        width: 150px;
        height: 13px;
    }
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
    }

    .arrow {
        display: flex;
        width: 17px;
        height: 13px;
    }
</style>