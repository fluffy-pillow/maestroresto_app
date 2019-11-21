<template>
    <div class="preload-screen">
        <div class="preload-image-wrapper">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PreloadScreen"
    }
</script>

<style scoped>
    .preload-image-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        top: calc(-44px + env(safe-area-inset-top));
        background-image: url(../../assets/images/course-preload-screen.png);
        background-size: cover;
    }

    .preload-image-wrapper img {
        width: 100%;
    }

    .preload-screen {
        position: absolute;
        background: #ffffff;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        top: calc(0px + env(safe-area-inset-top) * 7) !important;
        width: 100%;
        height: 100%;
    }

    .preload-screen.show {
        opacity: 1;
    }


</style>