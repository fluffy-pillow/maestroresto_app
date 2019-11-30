<template>
    <div class="room" ref="room">
        <MessageList :response="response"
                     :show-avatars="showAvatars"
                     :show-time-sent="showTimeSent"
        >
        </MessageList>
        <ChatInput
                :show-interlocutor-typing="showInterlocutorTyping"
                :show-add-files-interface="showAddFilesInterface"
        >

        </ChatInput>
    </div>
</template>

<script>
    import MessageList from "./MessageList";
    import ChatInput from "./ChatInput";
    export default {
        name: "Room",
        components: {ChatInput, MessageList},
        props: {
            response: Array,
            showAvatars: {
                type: Boolean,
                default: false
            },
            showTimeSent: {
                type: Boolean,
                default: false
            },
            showInterlocutorTyping: {
                type: Boolean,
                default: false
            },
            showAddFilesInterface: {
                type: Boolean,
                default: false
            }

        }
    }
</script>

<style scoped>
.room {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>