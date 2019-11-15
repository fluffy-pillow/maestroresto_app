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
    import {mapActions} from 'vuex'
    import StickyHeader from "@/components/Course/StickyHeader";
    import LoadedScreen from "@/components/Course/LoadedScreen";
    import PreloadScreen from "@/components/Course/PreloadScreen";

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
                this.showFooter()
                this.bShowPreloadScreen = false
            },
            ...mapActions({
                showFooter: 'footer/show'
            })
        }
    }
</script>

<style scoped>
.course {
    -webkit-overflow-scrolling: touch
}


</style>