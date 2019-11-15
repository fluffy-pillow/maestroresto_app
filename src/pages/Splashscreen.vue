<template>
    <v-ons-page class="splashscreen" @show="onShowPage"></v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Splashscreen",
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
.splashscreen {
    background: grey;
}
</style>