<template>
    <v-ons-page class="course" @show="onShowPage">
        <StickyHeader v-if="bShowStickyHeader"></StickyHeader>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <PreloadScreen :class="{show: bShowPreloadScreen}"></PreloadScreen>
            <LoadedScreen :class="{show: !bShowPreloadScreen}"></LoadedScreen>
        </div>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/CoursePage/StickyHeader";
    import LoadedScreen from "@/components/CoursePage/LoadedScreen";
    import PreloadScreen from "@/components/CoursePage/PreloadScreen";

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
                this.bShowStickyHeader = (this.$refs.pageContent.scrollTop > 0)
            },
            onShowPage () {
                this.bShowPreloadScreen = false
            }
        }
    }
</script>

<style scoped>
.course {
    -webkit-overflow-scrolling: touch
}


</style>