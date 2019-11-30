<template>
    <div class="chat-input" :class="{empty: message === '', focus: bFocus}">
        <div class="typing" v-if="showInterlocutorTyping">
            <div class="typing-icon">

            </div>
            <div class="typing-text">
                Марина печатает ..
            </div>
        </div>
        <div class="container">
            <openAddFileInterfaceButton  v-if="showAddFilesInterface"></openAddFileInterfaceButton>
            <AddFileInterface v-if="showAddFilesInterface"></AddFileInterface>
            <label class="input-label">
                <ContentEditable
                        class="input-wrapper"
                        :content="message"
                        :border="'none'"
                        @update="message = $event"
                        :placeholder-text="'Напишите сообщение…'"
                        :input-class="'chat-input-contententeditable'"
                        @onFocus="handleFocus"
                        @onBlur="handleBlur"
                >
                </ContentEditable>
            </label>
            <button class="send-button">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3659 0.0334103L0.294522 8.05151C-0.0873277 8.20406 -0.101197 8.74871 0.272341 8.92116L4.70955 10.9699C4.82973 11.0255 4.92099 11.1304 4.96054 11.2585L6.86428 17.4228C6.96045 17.734 7.33031 17.8548 7.58637 17.6584L10.9 15.1183C11.0583 14.997 11.2747 14.9913 11.439 15.104L16.9965 18.9188C17.2737 19.1091 17.6517 18.9477 17.7125 18.6132L20.9919 0.558822C21.0581 0.194421 20.7049 -0.102005 20.3659 0.0334103ZM8.20316 11.8442L7.6044 15.3076L6.05876 10.3487L16.6554 3.65663L8.20316 11.8442Z" fill="#4B4B4B"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import ContentEditable from "../ContentEditable";
    import openAddFileInterfaceButton from "./addFile/openAddFileInterfaceButton";
    import AddFileInterface from "./addFile/AddFileInterface";
    export default {
        name: "ChatInput",
        components: {AddFileInterface, openAddFileInterfaceButton, ContentEditable},
        data () {
            return {
                message: '',
                bFocus: false,
                bOpenAddFileInterface: false
            }
        },
        props: {
            showInterlocutorTyping: {
                type: Boolean,
                default: false
            },
            showAddFilesInterface: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleFocus () {
                this.bFocus = true
                Keyboard.shrinkView(true)
            },
            handleBlur () {
                this.bFocus = false
                Keyboard.shrinkView(false)
            }
        }
    }
</script>

<style scoped>
.chat-input {
    padding-bottom: env(safe-area-inset-top);
    padding-left: 16px;
    padding-right: 16px;
    background: #F9FBFD;
}

.chat-input.focus {
    padding-left: 16px;
    padding-right: 16px;
}

.container {
    border-radius: 16px;
    width: 100%;
    height: 50px;
    margin-bottom: 8px;
    margin-top: 8px;
    display: flex;
    background-color: #ffffff;
    position: relative;
}

.chat-input.empty .container {
    background-color: #EEF4FA;
}

.input-label {
    display: flex;
    flex: 1;
}

.chat-input:not(.empty) .send-button svg path {
    fill: #3DD498;
}

.send-button {
    display: flex;
    margin-right: 16px;
    margin-left: 16px;
}

.typing {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.typing-text {
    font-size: 10px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.16px;
    color: #61707D;
    margin-left: 6px;
}

.typing-icon {
    width: 10px;
    height: 10px;
    background-image: url(../../assets/images/writing-icon.svg);
    background-size: cover;
    margin-left: 5px;
}

</style>