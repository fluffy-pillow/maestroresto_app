<template>
    <div class="preload-screen">
        <div class="preload-image-wrapper">
            <img :src="require('@/assets/images/course-preload-screen.png')">
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
    }

    .preload-image-wrapper img {
        width: 100%;
    }

    .preload-screen {
        position: absolute;
        background: #ffffff;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .preload-screen.show {
        opacity: 1;
    }


</style>