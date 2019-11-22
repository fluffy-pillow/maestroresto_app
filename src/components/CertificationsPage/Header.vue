<template>
    <v-ons-toolbar static class="header">
        <div class="center">
            <div class="header-item">
            </div>
            <div class="title header-item">
                {{title}}
            </div>
            <div class="header-item"></div>
        </div>
    </v-ons-toolbar>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String
        }
    }
</script>

<style scoped>
    .header {
        z-index: 999999;
        box-shadow: none !important;
        height: calc(44px + env(safe-area-inset-top)) !important;
        display: flex;
        align-items: flex-end;
        background-color: #ffffff !important;
        background-image: none !important;
        padding-top: 0 !important;
    }

    .center {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        height: 44px !important;
        line-height: 44px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    .header-item {
        flex: 1;
    }

    .title {
        letter-spacing: 0.16px;
        color: #4B4B4B;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
    }
</style>