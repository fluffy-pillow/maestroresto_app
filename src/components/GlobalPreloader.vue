<template>
    <div class="global-preloader-wrapper" :class="{show: bShow}">
        <dot-loader class="global-preloader" :loading="bShow" :color="'#3DD498'" :size="'50px'"></dot-loader>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "GlobalPreloader",
        computed: {
            ...mapGetters({
                bShow: 'globalPreloader/isShow',
            })
        }
    }
</script>

<style scoped>
.global-preloader-wrapper {
    position: absolute;
    z-index: 99999999;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
}

.global-preloader-wrapper.show {
    display: flex;
}

.global-preloader {
    margin-top: calc(300px + env(safe-area-inset-top));
}
</style>