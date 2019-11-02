<template>
    <v-ons-page class="main-course" @show="onShowPage">
        <StickyHeader v-if="bShowStickyHeader"></StickyHeader>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <PreloadScreen :class="{show: bShowPreloadScreen}"></PreloadScreen>
            <LoadedScreen :class="{show: !bShowPreloadScreen}"></LoadedScreen>
        </div>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "./StickyHeader";
    import PreloadScreen from "./PreloadScreen";
    import LoadedScreen from "./LoadedScreen";

    export default {
        name: "MainCourse",
        components: {LoadedScreen, PreloadScreen, StickyHeader},
        data () {
            return {
                bShowStickyHeader: false,
                bShowPreloadScreen: true
            }
        },
        methods: {
            handleScroll () {
                this.bShowStickyHeader = (this.$refs.pageContent.scrollTop > 400)
            },
            onShowPage () {
                this.bShowPreloadScreen = false
            }
        }
    }
</script>

<style scoped>


    .main-course {
        -webkit-overflow-scrolling: touch
    }



</style>