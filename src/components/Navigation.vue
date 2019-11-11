<template>
    <v-ons-navigator swipeable swipe-target-width="200px"
                     :page-stack="pageStack"
                     :pop-page="goBack"
    ></v-ons-navigator>
</template>

<script>
    import {mapActions} from 'vuex'

    import userDB from '@/db/userDB'

    export default {
        name: "Navigation",
        data() {
            return {
                pageStack: [],
            }
        },
        methods: {
            goBack() {
                this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
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
                setToken: 'user/setToken'
            })
        },

        mounted() {
            this.localDBRequest()

            const mapRouteStack = route => this.pageStack = route.matched.map(m => {
                return m.components.default
            })
            mapRouteStack(this.$route)
            this.$router.beforeEach((to, from, next) => {
                mapRouteStack(to) && next()
            });
        }
    }
</script>

<style scoped>

</style>