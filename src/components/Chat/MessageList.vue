<template>
    <div class="message-list">
        <div class="message"
             v-for="(message, key) of response"
             :key="key"
             :class="message.from"
        >
            {{message.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageList",
        data () {
            return {
                response: [
                    {
                        from: 'me',
                        text: 'Уверен, что вы слышали выражение «Пойдем посидим». В нем заключается вся суть хождения по кафе, ресторанам и барам. В первую очередь люди ходят туда не вкусно и дешево поесть, а пообщаться – на других посмотреть и себя показать. Но при этом кухня всегда должна быть на уровне.'
                    },
                    {
                        from: 'me',
                        text: 'Уверен, что вы слышали выражение «Пойдем посидим». В нем заключается вся суть хождения по кафе, ресторанам и барам. В первую очередь люди ходят туда не вкусно и дешево поесть, а пообщаться – на других посмотреть и себя показать. Но при этом кухня всегда должна быть на уровне.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.message-list {
    flex: 1;
    background: #F9FBFD;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.message {
    border-radius: 33px;
    padding: 16px;
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 16px;
}

.message:last-child {
    margin-bottom: 26px;
}

.message.me {
    background: #FFFFFF;
    margin-left: 62px;
}
</style>