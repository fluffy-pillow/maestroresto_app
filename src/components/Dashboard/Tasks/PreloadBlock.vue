<template>
    <div class="preload-block">
        <div class="head">
            <vue-content-loading class="title" :width="150" :height="13">
                <rect width="150" height="13" rx="3" fill="#EFF1F2"/>
            </vue-content-loading>


            <vue-content-loading class="arrow" :width="17" :height="13">
                <rect width="17" height="13" rx="3" fill="#EFF1F2"/>
            </vue-content-loading>

        </div>
        <vue-content-loading class="body" :height="120" preserveAspectRatio="none">
            <rect rx="20" height="120" fill="#EFF1F2"/>
        </vue-content-loading>

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
        width: 100%;
    }

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

    .body {
        height: 120px;
        width: calc(100% - 16px);
        margin-top: 16px;
        margin-left: 16px;
    }

    .body rect {
        width: 100%;
    }
</style>
