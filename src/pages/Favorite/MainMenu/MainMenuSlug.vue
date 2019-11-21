<template>
    <v-ons-page class="main-menu-slug" @show="onShowPage">
        <StickyHeader v-if="bShowStickyHeader"></StickyHeader>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <MainSlug></MainSlug>
        </div>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import MainSlug from "../../../components/FavoritePage/MainMenuPage/Slug/MainSlug";
    import StickyHeader from "../../../components/FavoritePage/MainMenuPage/Slug/StickyHeader";
    export default {
        name: "Slug",
        components: {StickyHeader, MainSlug},
        data () {
            return {
                bShowStickyHeader: false
            }
        },
        methods: {
            handleScroll () {
                this.bShowStickyHeader = (this.$refs.pageContent.scrollTop > 0)
            },
            onShowPage () {
                this.hideFooter()
            },
            ...mapActions({
                hideFooter: 'footer/hide'
            })
        }

    }
</script>

<style scoped>
    .main-menu-slug {
        -webkit-overflow-scrolling: touch
    }

</style>