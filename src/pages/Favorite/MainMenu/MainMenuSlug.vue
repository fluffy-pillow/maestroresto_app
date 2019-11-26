<template>
    <v-ons-page class="main-menu-slug">
        <Header :color="(bShowStickyHeader) ? 'white' : 'transparent'"
        >
        </Header>
        <div class="page__content" @scroll="handleScroll" ref="pageContent">
            <MainSlug></MainSlug>
        </div>
    </v-ons-page>
</template>

<script>
    import MainSlug from "../../../components/FavoritePage/MainMenuPage/Slug/MainSlug";
    import Header from "../../../components/Header";
    export default {
        name: "Slug",
        components: {Header, MainSlug},
        data () {
            return {
                bShowStickyHeader: false
            }
        },
        methods: {
            handleScroll () {
                this.bShowStickyHeader = (this.$refs.pageContent.scrollTop > 0)
            }
        }

    }
</script>

<style scoped>
    .main-menu-slug {
        -webkit-overflow-scrolling: touch
    }

</style>