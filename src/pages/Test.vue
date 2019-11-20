<template>
    <v-ons-page class="test" @show="onShowPage" ref="test">
        <Header></Header>
        <MainTest></MainTest>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../components/Test/Header";
    import MainTest from "../components/Test/MainTest";
    export default {
        name: "Test",
        components: {MainTest, Header},
        methods: {
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

</style>