<template>
    <v-ons-page class="menu"  @show="onShowPage">
        <div></div>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Menu",
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