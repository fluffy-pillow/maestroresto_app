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


    export default {
        name: "PreloadBlock",
        components: {VueContentLoading},
    }
</script>

<style scoped>
    .preload-block {
        padding-top: 20px;
        width: 100%;
        background: #ffffff;
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
