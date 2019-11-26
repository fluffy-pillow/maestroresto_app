<template>
    <div class="chat-input" :class="{empty: message === '', focus: bFocus}">
        <div class="container">
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
    export default {
        name: "ChatInput",
        components: {ContentEditable},
        data () {
            return {
                message: '',
                bFocus: false
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
    height: 50px;
    padding-top: 8px;
    padding-bottom: calc(8px + env(safe-area-inset-top));
    padding-left: 16px;
    padding-right: 16px;
    background: #F9FBFD;
}

.chat-input.focus {
    height: 50px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
}

.container {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #ffffff;
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
</style>