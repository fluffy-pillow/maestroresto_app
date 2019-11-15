<template>
    <v-ons-page class="certification" @show="onShowPage">
        <div></div>

    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Certification",
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