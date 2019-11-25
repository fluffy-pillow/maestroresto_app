<template>
    <div class="room" ref="room">
        <MessageList></MessageList>
        <ChatInput></ChatInput>
    </div>
</template>

<script>
    import MessageList from "./MessageList";
    import ChatInput from "./ChatInput";
    export default {
        name: "Room",
        components: {ChatInput, MessageList}
    }
</script>

<style scoped>
.room {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>