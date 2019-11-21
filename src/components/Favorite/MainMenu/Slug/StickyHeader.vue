<template>
    <v-ons-toolbar static class="sticky-header">
        <div class="center">
            <div class="container">
                <v-ons-back-button>

                </v-ons-back-button>
            </div>
        </div>
    </v-ons-toolbar>
</template>

<script>
    export default {
        name: "StickyHeader"
    }
</script>

<style scoped>
.sticky-header {
    height: calc(44px + env(safe-area-inset-top)) !important;
    display: flex;
    align-items: flex-end;
    background: #ffffff !important;
    z-index: 999999;
    box-shadow: none !important;
}
.center {
    width: 100%;
    height: 44px !important;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.heart {
    width: 24px;
    height: 24px;
}

.heart svg {
    width: 100%;
    height: auto;
}

.heart svg path {
    fill: #ADB3BC;
}

.back-button {
    background: rgba(97, 112, 125, 0.1);
    width: 30px;
    height: 30px;
    padding: 0;
    background-image: url(../../../../assets/images/arrow-left-white.svg);
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;
}
</style>