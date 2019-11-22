<template>
    <v-ons-page class="menu"  @show="onShowPage">
        <Header></Header>
        <MainMenu></MainMenu>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../components/MenuPage/Header";
    import MainMenu from "../components/MenuPage/MainMenu";

    export default {
        name: "Menu",
        components: {MainMenu, Header},
        methods: {
            onShowPage () {
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show'
            })
        }
    }
</script>

<style scoped>

</style>