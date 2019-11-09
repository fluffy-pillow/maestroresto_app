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
            ...mapActions({
                showFooter: 'footer/show',
                setToken: 'user/setToken'
            })
        },
        created() {
            let that = this
            userDB.getToken().then(token => {
                this.$store.dispatch('user/setToken', {
                    token: token, callback: function (response) {
                        setTimeout(() => {
                            if (response.answer === 'ok') {
                                that.$router.replace('/dashboard').catch(err => {})
                            } else {
                                that.$router.replace('/auth').catch(err => {})
                            }
                        }, 0)

                    }
                })
            })

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