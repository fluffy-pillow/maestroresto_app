<template>
    <div class="preload-block head-inner">
        <div class="container">
            <vue-content-loading class="head-left" :width="178" :height="44">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#D1D5DB"/>
                <rect x="64" y="16" width="114" height="13" rx="3" fill="#EFF1F2"/>
            </vue-content-loading>
            <vue-content-loading class="head-right" :width="30" :height="30">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#D1D5DB"/>
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
    .head-inner {
        width: 100%;
        display: flex;
        height: 100%;
    }

    .container {
        width: 100%;
        height: 100%;
        align-items: center;
        padding-left: 32px;
        padding-right: 16px;
        display: flex;
        justify-content: space-between;
    }

.head-left {
    width: 178px;
    height: 44px;
}

.head-right {
    width: 30px;
    height: 30px;
}
</style>
