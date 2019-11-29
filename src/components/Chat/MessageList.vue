<template>
    <div class="message-list">
        <div class="time-separator" v-if="showTimeSent">
            <div class="time-separator-content-wrapper">
                <div class="time-separator-content">
                    Сегодня
                </div>
            </div>
        </div>
        <div class="message"
             v-for="(message, key) of response"
             :key="key"
             :class="message.from"
        >
            <div class="message-top">
                <Avatar v-if="showAvatars"
                        class="avatar"
                        :size="24"
                        :src="require('@/assets/images/avatar.jpeg')"
                >
                </Avatar>
                <div class="text">
                    {{message.text}}
                </div>
            </div>
            <div class="message-bottom" v-if="showTimeSent">
                13:30
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "../Avatar";
    export default {
        name: "MessageList",
        components: {Avatar},
        props: {
            response: Array,
            showAvatars: {
                type: Boolean,
                default: false
            },
            showTimeSent: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
.message-list {
    flex: 1;
    background: #F9FBFD;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.message {
    margin-bottom: 16px;

}

.message-top {
    display: flex;
    align-items: flex-end;
}

.message .text {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    border-radius: 33px;
    padding: 16px;
}

.message:last-child {
    margin-bottom: 26px;
}

.message.me .avatar {
    order: 2;
    margin-left: 8px;
}

.message.interlocutor .avatar {
    order: 2;
    margin-right: 8px;
}

.message.me {
    margin-right: 16px;
}

.message.interlocutor {
    margin-left: 16px;
}

.message .message-bottom {
    margin-top: 6px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.14px;
    color: #7C7C7C;
}

.message.me .message-bottom {
    text-align: right;
    padding-right: 32px;
}

.message.interlocutor .message-bottom {
    padding-left: 32px;
}

.message.me .text {
    background: #FFFFFF;
    margin-left: 62px;
    border-bottom-right-radius: 0;
    order: 1;
}

.message.interlocutor .text {
    background: #3DD498;
    margin-right: 62px;
    color: #ffffff;
    border-bottom-left-radius: 0;
    order: 2;
}

.avatar {
}

.time-separator {
    background: #DDDDDD;
    position: relative;
    height: 1px;
    margin-bottom: 35px;
}

.time-separator-content-wrapper {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #ffffff;
}

.time-separator-content {
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    border-radius: 27px;
    padding-left: 22px;
    padding-right: 22px;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.16px;
    color: #000000;
    padding-top: 2px;
    padding-bottom: 2px;
}
</style>