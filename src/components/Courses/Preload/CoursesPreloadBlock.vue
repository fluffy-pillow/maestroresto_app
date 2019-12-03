<template>
    <div class="preload-block">
        <CoursesPreloadHead  v-if="$parent.showHead"></CoursesPreloadHead>
        <div class="body">
            <div class="items">
                <vue-content-loading
                        class="item"
                        v-for="i in 4"
                        :key="i"
                        :width="215"
                        :height="200"
                >
                    <rect width="215" height="200" rx="20" fill="#EFF1F2"/>
                </vue-content-loading>
            </div>
        </div>

    </div>
</template>

<script>
    import VueContentLoading from 'vue-content-loading';
    import CoursesPreloadHead from "./CoursesPreloadHead";


    export default {
        name: "CoursesPreloadBlock",
        components: {CoursesPreloadHead, VueContentLoading},
    }
</script>

<style scoped>
    .preload-block {
        padding-top: 20px;
        width: 100%;
        background: #ffffff;
    }


    .item {
        width: 215px;
        height: 200px;
        margin-left: 10px;
    }

    .body {
        overflow: hidden;
        margin-top: 16px;
        margin-left: 10px;
    }

    .items {
        display: flex;
        width: min-content;
    }
</style>
