<template>
    <div class="contacts-list">
        <SwipeOutList :item-color="'rgba(223,236,243, 0.2)'">
            <SwipeOutItem
                v-for="(item, key) of items"
                :key="key"
                @opened="opened"
            >
               <div class="content" @click="handleClick">
                <div class="left-content">
                    <Avatar
                            class="avatar"
                            :size="47"
                            :src="require('@/assets/images/avatar.jpeg')"
                    >
                    </Avatar>
                </div>
                <div class="middle-content">
                    <div class="details">
                        <div class="name">
                            {{item.firstName}} {{item.lastName}}
                        </div>
                        <div class="last-changes">
                            <div class="message" v-if="!item.writing">
                                <div class="from" v-if="item.message.from === 'me'">
                                    Вы:
                                </div>
                                <div class="message-text">
                                    {{item.message.text}}
                                </div>
                            </div>
                            <div class="writing" v-else>
                                <div class="writing-text">
                                    {{item.firstName}} печатает..
                                </div>
                                <div class="writing-icon">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <div class="time">
                        {{item.time}}
                    </div>
                </div>
               </div>
            </SwipeOutItem>
        </SwipeOutList>
    </div>
</template>

<script>

    import SwipeOutList from "../SwipeOut/SwipeOutList";
    import SwipeOutItem from "../SwipeOut/SwipeOutItem";
    import Avatar from "../Avatar";
    export default {
        name: "ContactsList",
        components: {Avatar, SwipeOutItem, SwipeOutList},
        data () {
            return {
                items: [
                    {
                        type: 'default',
                        firstName: 'Марина',
                        lastName: 'Терехова',
                        avatar: '',
                        time: '15:30',
                        message: {
                            from: 'me',
                            text: 'Текст сообщения'
                        }
                    },
                    {
                        type: 'default',
                        firstName: 'Марина',
                        lastName: 'Терехова',
                        avatar: '',
                        time: '15:30',
                        message: {
                            from: 'interlocutor',
                            text: 'Текст сообщения'
                        }
                    },
                    {
                        type: 'default',
                        firstName: 'Марина',
                        lastName: 'Терехова',
                        avatar: '',
                        time: '15:30',
                        message: {
                            from: 'interlocutor',
                            text: 'Текст сообщения'
                        },
                        writing: true
                    }
                ]
            }
        },
        methods: {
            handleClick () {
                this.$router.push(this.$route.path + '/correspondence/1')
            },
            opened (e) {
                if (e.status === true) {
                    e.target.querySelector('.time').style.display = 'none'
                } else {
                    e.target.querySelector('.time').style.display = 'block'
                }
            }
        }
    }
</script>

<style scoped>
.contacts-list {
    margin-top: 16px;
}

.content {
    display: flex;
    align-items: center;
    height: 75px;
}

.avatar {
    margin-left: 16px;
}

.name {
    font-weight: 500;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: -0.02px;
    color: #000000;
}

.details {
    margin-left: 16px;
    align-self: center;
}

.last-changes {
    margin-top: 5px;
}

.message {
    display: flex;
}

.message .from {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.14px;
    color: #3DD498;
}

.message .message-text {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.14px;
    color: #7C7C7C;
    margin-left: 4px;
}

.time {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.14px;
    color: #7C7C7C;
    margin-left: auto;
    margin-right: 16px;
}

.left-content, .middle-content, .right-content {
    height: 43px;
    display: flex;
}

.right-content {
    flex: 1;
}

.writing-icon {
    width: 10px;
    height: 10px;
    background-image: url(../../assets/images/writing-icon.svg);
    background-size: cover;
    margin-left: 5px;
}

.writing-text {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.14px;
    color: #7C7C7C;
}

.writing {
    display: flex;
    align-items: center;
}
</style>