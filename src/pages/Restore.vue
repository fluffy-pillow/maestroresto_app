<template>
    <v-ons-page class="restore" @show="onShowPage">
        <Header></Header>
        <MainRestore></MainRestore>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "@/components/Restore/Header";
    import MainRestore from "@/components/Restore/MainRestore";
    export default {
      name: "Restore",
      components: {MainRestore, Header},
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
