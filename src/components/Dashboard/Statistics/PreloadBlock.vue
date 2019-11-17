<template>
    <div class="preload-block">
        <div class="head">
            <vue-content-loading class="title" :width="150" :height="13">
                <rect width="150" height="13" rx="3" fill="#EFF1F2"/>
            </vue-content-loading>

            <vue-content-loading class="rating" :width="70" :height="13">
                <rect width="70" height="13" rx="3" fill="#EFF1F2"/>
            </vue-content-loading>
        </div>
        <div class="body">
            <vue-content-loading class="position" :height="100" preserveAspectRatio="none">
                <rect rx="20" height="100" fill="#EFF1F2"/>
            </vue-content-loading>

            <vue-content-loading class="progress" :height="100" preserveAspectRatio="none">
                <rect rx="20" height="100" fill="#EFF1F2"/>
            </vue-content-loading>
        </div>

    </div>
</template>

<script>
    import VueContentLoading from 'vue-content-loading';


    export default {
        name: "PreloadBlock",
        components: {VueContentLoading},
    }
</script>

<style scoped>
    .preload-block {
        padding-left: 20px;
        padding-right: 20px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .body {
        margin-top: 20px;
        display: flex;
    }

    .title {
        width: 150px;
        height: 13px;
    }

    .rating {
        width: 70px;
        height: 13px;
    }

    .position {
        height: 100px;
        min-width: 42%;
        width: 42%;
    }


    .position rect {
        width: 100%;
        height: 100px;
    }

    .progress {
        height: 100px;
        width: 100%;
        margin-left: 10px;
    }

    .progress rect {
        width: 100%;
        height: 100px;
    }
</style>
