<template>
    <div class="message-list" ref="messageList">
        <div class="container">
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
                    <div class="message-content" :class="{video: message.video}">
                        <div
                                v-if="(message.audio && message.audioName) ||
                                (message.video) ||
                                ((message.docName))"
                                class="file-container"
                        >
                            <Audio v-if="message.audio && message.audioName"
                                   :audio="message.audio"
                                   :audio-name="message.audioName"
                                   :style-variant="(message.from === 'me')? 'light-bg' : 'dark-bg'"
                            >
                            </Audio>

                            <DocFile v-if="message.docName"
                                     :name="message.docName"
                                     :style-variant="(message.from === 'me')? 'light-bg' : 'dark-bg'"
                            ></DocFile>

                            <Video v-if="message.video"
                                   :video="message.video"
                                   :style-variant="(message.from === 'me')? 'light-bg' : 'dark-bg'"
                            >
                            </Video>

                        </div>
                        <div v-else class="text">
                            {{message.text}}
                        </div>
                    </div>
                </div>
                <div class="message-bottom" v-if="showTimeSent" :class="{showAvatars: showAvatars}">
                    13:30
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "../Avatar";
    import Audio from "../Audio";
    import DocFile from "../DocFile";
    import Video from "../Video";
    export default {
        name: "MessageList",
        components: {DocFile, Audio, Avatar, Video},
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
        },
        mounted () {
            this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight;
        }
    }
</script>

<style scoped>
.message-list {
    flex: 1;
    background: #F9FBFD;
    display: flex;
    flex-direction: column;
    overflow: scroll;
}

.container {
    margin-top: auto;
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
    padding: 16px;

}

.message-content {
    border-radius: 33px;
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
    margin-left: auto;
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
}

.message.me .message-bottom.showAvatars {
    padding-right: 32px;
}

.message.interlocutor .message-bottom.showAvatars {
    padding-left: 32px;
}


.message.me .message-content {
    background: #FFFFFF;
    margin-left: auto;
    border-bottom-right-radius: 0;
    order: 1;
}

.message .message-content.video {
    background: transparent !important;
}

.message.interlocutor .message-content {
    background: #3DD498;
    border-bottom-left-radius: 0;
    order: 2;
}

.message.interlocutor .message-content .text {
    color: #ffffff;
}

.message-content {
    max-width: 278px;
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