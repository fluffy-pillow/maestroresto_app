<template>
    <div class="create-chat-head">
        <button class="create-group-chat-button" @click="$parent.bGroup = true">
                <span class="create-group-chat-button-icon">

                </span>
            <span class="create-group-chat-button-text">
                    Новый чат
                </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "CreateChatHead"
    }
</script>

<style scoped>
    .create-group-chat-button-icon {
        width: 22px;
        height: 15px;
        background-image: url(../../../assets/images/group-chat.svg);
        background-size: cover;
    }

    .create-group-chat-button {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    .create-group-chat-button-text {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.4px;
        color: #000000;
        margin-left: 16px;
        font-family: SFProText;
    }

    .create-chat-head {
        width: 100%;
        margin-top: 24px;
    }
</style>