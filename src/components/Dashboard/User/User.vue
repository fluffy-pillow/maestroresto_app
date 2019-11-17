<template>
    <v-ons-toolbar class="user" :class="{transformed: bTransformed}">
        <div class="center">
            <PreloadBlock :class="{show: !response}"></PreloadBlock>
            <LoadedBlock :class="{show: response}" :response="response"></LoadedBlock>
        </div>
    </v-ons-toolbar>
</template>

<script>
    import UserService from '@/services/UserService'
    import userDB from '@/db/userDB'
    import {mapActions, mapGetters} from 'vuex'
    import PreloadBlock from "./PreloadBlock";
    import LoadedBlock from "./LoadedBlock";

    export default {
        name: "User",
        components: {LoadedBlock, PreloadBlock},
        data () {
            return {
                bTransformed: false,
                page: null,
                pageContent: null,
                localDBerror: false,
                response: null
            }
        },
        computed: {
            ...mapGetters({
                token: 'user/getToken'
            })
        },
        methods: {
            switchStyle () {
                if (this.page) {
                    if (this.page.scrollTop >= 1) {
                        this.bTransformed = true
                    }
                    if (this.page.scrollTop <= 1) {
                        this.bTransformed = false
                    }
                }
            },
            serviceRequest () {
                UserService.getData(this.token, response => {
                    if (response.error) {
                        this.systemMessage({type: 'error', message: response.error.message, duration: 5000})
                        if (response.error.type === 'USER_NOT_AUTHORIZED') {
                            this.logout()
                        }
                    } else {
                        this.response = response

                        if (this.localDBerror) {
                            userDB.insertData(response)
                        } else {
                            userDB.updateData(response)
                        }
                    }

                })
            },
            localDBRequest () {
                userDB.getData(response => {
                    if (!response.error) {
                        this.response = response
                    } else {
                        this.localDBerror = true
                    }
                    this.serviceRequest()
                })

            },
            ...mapActions({
                systemMessage: 'systemMessage/systemMessage'
            })
        },
        mounted () {
            this.localDBRequest()

            this.page = document.querySelector('.dashboard.page')
            this.pageContent = this.page.querySelector('.page__content')

            let that = this
            this.pageContent.addEventListener('scroll', function (e) {
                that.switchStyle()
            })
        }
    }
</script>

<style scoped>
    .user {
        background-color: transparent;
        height: calc(44px + constant(safe-area-inset-top));
        height: calc(44px + env(safe-area-inset-top));
        background-image: none;
        box-shadow: none;
        display: flex;
        align-items: flex-end;
        padding-top: 0px !important;
    }

    .center {
        display: flex;
        height: 44px !important;
        position: relative;
    }

    .user.transformed {
        background-color: #FFFFFF !important;
        box-shadow: 0 5px 2px -1px rgba(0, 0, 0, 0.05);
    }

    .preload-block.show, .loaded-block.show {
        opacity: 1;
        visibility: visible;
    }

    .preload-block, .loaded-block {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    }

</style>
