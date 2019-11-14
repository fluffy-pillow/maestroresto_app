<template>
    <v-ons-navigator swipeable swipe-target-width="200px"
                     :page-stack="pageStack"
                     :pop-page="goBack"
    ></v-ons-navigator>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    import userDB from '@/db/userDB'

    export default {
        name: "Navigation",
        methods: {
            goBack() {
                this.$router.push(this.$route.matched[this.$route.matched.length - 2].path)
            },
            localDBRequest () {
                userDB.getToken(response => {
                    this.vuexRequest(response)
                })
            },
            vuexRequest (localDBResponse) {
                let that = this
                this.setToken({
                    token: localDBResponse.token,
                    callback: response => {
                        if (response.ok) {
                            that.$router.push('/dashboard').catch(err => {})
                        } else {
                            that.$router.push('/auth').catch(err => {})
                        }
                    }
                })
            },

            ...mapActions({
                showFooter: 'footer/show',
                setToken: 'user/setToken',
            })
        },
        computed: {
            ...mapGetters({
                pageStack: 'router/getPageStack'
            })
        },
        created() {
            this.localDBRequest()
        }
    }
</script>

<style scoped>

</style>