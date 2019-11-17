<template>
    <div class="preload-block head-inner">
        <div class="container">
            <div class="head-left">
                <div v-if="avatarUrl" class="avatar">
                    <img :src="avatarUrl">
                </div>
                <div v-else class="no-avatar">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8141 12.6611C16.6935 11.4447 17.9095 9.34375 17.9095 6.91106C17.9095 3.09615 14.8141 0 11 0C7.18593 0 4.09045 3.09615 4.09045 6.91106C4.09045 9.28846 5.30653 11.3894 7.18593 12.6611C2.98492 14.2091 0 18.2452 0 23H1.82412C1.82412 17.9135 5.91457 13.8221 11 13.8221C16.0854 13.8221 20.1759 17.9135 20.1759 23H22C22 18.2452 19.0151 14.2091 14.8141 12.6611ZM5.96985 6.91106C5.96985 4.14663 8.23618 1.87981 11 1.87981C13.7638 1.87981 16.0301 4.14663 16.0301 6.91106C16.0301 9.67548 13.7638 11.9976 11 11.9976C8.23618 11.9976 5.96985 9.73077 5.96985 6.91106Z" fill="#3DD498"/>
                    </svg>
                </div>

                <div class="user-info">
                    <div class="user-name">
                        {{firstName}}
                    </div>
                </div>
            </div>
            <div class="head-right">
                <div class="notifications">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9821 1.50623C15.518 1.50623 13.5132 3.51105 13.5132 5.9751C13.5132 8.43896 15.518 10.4438 17.9821 10.4438C20.4461 10.4438 22.4507 8.43896 22.4507 5.9751C22.4507 3.51105 20.4461 1.50623 17.9821 1.50623Z" fill="#3DD498"/>
                        <path d="M17.8484 16.6835V11.8484C14.6704 11.777 12.1069 9.16974 12.1069 5.9751C12.1069 5.03833 12.3278 4.15247 12.7192 3.36584C11.9936 3.13257 11.2306 3.01245 10.4507 3.01245C6.3717 3.01245 3.0531 6.33105 3.0531 10.4101V16.6835C2.17859 16.9777 1.54688 17.8055 1.54688 18.7782C1.54688 19.9964 2.53802 20.9875 3.75623 20.9875H17.1453C18.3635 20.9875 19.3546 19.9964 19.3546 18.7782C19.3546 17.8055 18.7231 16.9777 17.8484 16.6835Z" fill="#4B4B4B"/>
                        <path d="M10.4507 24C11.7166 24 12.8361 23.3632 13.5071 22.3938H7.39435C8.06543 23.3632 9.18494 24 10.4507 24Z" fill="#4B4B4B"/>
                        <path d="M12.6354 1.87885C12.4753 0.816833 11.5567 0 10.4507 0C9.34424 0 8.42523 0.817749 8.26593 1.88068C8.96484 1.7016 9.6969 1.6062 10.4507 1.6062C11.1962 1.6062 11.9284 1.69849 12.6354 1.87885Z" fill="#4B4B4B"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
           response: Object
        },
        data () {
            return {
                firstName: '',
                avatarUrl: null,
            }
        },
        watch: {
            response: function (newValue) {
                this.firstName = newValue.firstName
                this.avatarUrl = newValue.avatarUrl
            }
        }
    }
</script>

<style scoped>
    .head-left {
        display: flex;
    }

    .head-inner {
        width: 100%;
        display: flex;
        height: 100%;
    }

    .container {
        width: 100%;
        height: 100%;
        align-items: center;
        padding-left: 32px;
        padding-right: 16px;
        display: flex;
        justify-content: space-between;
    }

    .avatar {
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

    .no-avatar {
        width: 32px;
        height: 32px;
        min-width: 32px;
        overflow: hidden;
        border-radius: 50%;
    }

    .no-avatar svg {
        width: 100%;
        height: auto;
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
        display: flex;
        align-items: center;
    }
</style>
