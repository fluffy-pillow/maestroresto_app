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
                    if (response.token) {
                        this.setToken(response.token)
                        this.$router.push('/dashboard').catch(err => {})
                    } else {
                        this.$router.push('/auth').catch(err => {})
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