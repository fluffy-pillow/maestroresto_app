<template>
    <v-ons-toolbar class="user" :class="{transformed: bTransformed}">
        <div class="left">
            <div class="avatar">
                <img :src="require('@/assets/images/avatar.jpeg')">
            </div>
            <div class="user-info">
                <div class="user-name">
                    {{firstName}}
                </div>
            </div>
        </div>
        <div class="right">
            <div class="notifications">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9821 1.50623C15.518 1.50623 13.5132 3.51105 13.5132 5.9751C13.5132 8.43896 15.518 10.4438 17.9821 10.4438C20.4461 10.4438 22.4507 8.43896 22.4507 5.9751C22.4507 3.51105 20.4461 1.50623 17.9821 1.50623Z" fill="#3DD498"/>
                    <path d="M17.8484 16.6835V11.8484C14.6704 11.777 12.1069 9.16974 12.1069 5.9751C12.1069 5.03833 12.3278 4.15247 12.7192 3.36584C11.9936 3.13257 11.2306 3.01245 10.4507 3.01245C6.3717 3.01245 3.0531 6.33105 3.0531 10.4101V16.6835C2.17859 16.9777 1.54688 17.8055 1.54688 18.7782C1.54688 19.9964 2.53802 20.9875 3.75623 20.9875H17.1453C18.3635 20.9875 19.3546 19.9964 19.3546 18.7782C19.3546 17.8055 18.7231 16.9777 17.8484 16.6835Z" fill="#4B4B4B"/>
                    <path d="M10.4507 24C11.7166 24 12.8361 23.3632 13.5071 22.3938H7.39435C8.06543 23.3632 9.18494 24 10.4507 24Z" fill="#4B4B4B"/>
                    <path d="M12.6354 1.87885C12.4753 0.816833 11.5567 0 10.4507 0C9.34424 0 8.42523 0.817749 8.26593 1.88068C8.96484 1.7016 9.6969 1.6062 10.4507 1.6062C11.1962 1.6062 11.9284 1.69849 12.6354 1.87885Z" fill="#4B4B4B"/>
                </svg>
            </div>
        </div>
    </v-ons-toolbar>
</template>

<script>
    import UserService from '@/services/UserService'
    import userDB from '@/db/userDB'
    import {mapActions} from 'vuex'

    export default {
        name: "User",
        data () {
            return {
                bTransformed: false,
                page: null,
                pageContent: null,
                firstName: ''
            }
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
            ...mapActions({
                systemMessage: 'systemMessage/systemMessage'
            })
        },
        mounted () {
            userDB.getToken().then(token => {
                UserService.getUserData(token, response => {
                    if (response.error) {
                        this.systemMessage(
                            {
                                type: 'error',
                                message: response.error.message,
                                duration: 5000
                            }
                        )
                        this.redir('Auth')
                    } else {
                        this.firstName = response.firstName
                    }
                })
            })


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
.left {
    display: flex;
    align-items: center;
    height: 44px;
    line-height: unset !important;
}

.right {
    display: flex;
    justify-content: flex-end;
    height: 44px;
    line-height: unset !important;
}

.center {
    height: 44px;
    line-height: unset !important;
}

.user {
    background-color: transparent;
    height: calc(44px + constant(safe-area-inset-top));
    height: calc(44px + env(safe-area-inset-top));
    background-image: none;
    box-shadow: none;
    display: flex;
    align-items: flex-end;
}

.user.iphonex {
/*    padding-top: 44px;*/
}

.user.transformed {
    background-color: #FFFFFF !important;
    box-shadow: 0 5px 2px -1px rgba(0, 0, 0, 0.05);
}

.avatar {
    margin-left: 32px;
    width: 32px;
    height: 32px;
    min-width: 32px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0px -1px 13px rgba(0, 0, 0, 0.4);
}


.avatar img {
    width: 100%;
    height: auto;
    margin-top: -25%;
}

.user-info {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.user-name {
    letter-spacing: -0.165px;
    color: #4B4B4B;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
}


.notifications {
    margin-right: 16px;
    display: flex;
    align-items: center;
}
</style>
