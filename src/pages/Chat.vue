<template>
    <v-ons-page class="chat" @show="onShowPage">

    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Chat",
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