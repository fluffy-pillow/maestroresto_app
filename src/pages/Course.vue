<template>
    <v-ons-page class="course" @show="onShowPage">
        <StickyHeader :color="(bShowStickyHeader) ? 'white' : 'transparent'"
        >
            <FavoriteButton class="favorite-button"
                            :color="(bShowStickyHeader) ? 'black' : 'white'"
                            slot="rightSideContent">

            </FavoriteButton>
        </StickyHeader>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <PreloadScreen :class="{show: bShowPreloadScreen}"></PreloadScreen>
            <LoadedScreen :class="{show: !bShowPreloadScreen}"></LoadedScreen>
        </div>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/StickyHeader";
    import LoadedScreen from "@/components/CoursePage/LoadedScreen";
    import PreloadScreen from "@/components/CoursePage/PreloadScreen";
    import FavoriteButton from "../components/FavoriteButton";

    export default {
        name: "Course",
        components: {FavoriteButton, LoadedScreen, PreloadScreen, StickyHeader},
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

.favorite-button {
    margin-left: auto;
}
</style>