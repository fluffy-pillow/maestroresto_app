<template>
    <div class="create-chat">
        <div class="line">
        </div>
        <div class="head">
            <div class="create-group-chat-button-wrapper">
                <button class="create-group-chat-button">
                    <span class="create-group-chat-button-icon">

                    </span>
                    <span class="create-group-chat-button-text">
                        Новый чат
                    </span>
                </button>
            </div>
        </div>
        <div class="body">
            <ul class="contacts">
                <li
                    v-for="(item, key) of items"
                    :key="key"
                    class="contacts-block"
                >
                    <span class="contacts-block-head">
                        {{item.letter}}
                    </span>
                    <ul class="contacts-list">
                        <li
                            v-for="(user, key) of item.users"
                            :key="key"
                            class="contact-item"
                        >
                            <Avatar
                                    class="avatar"
                                    :size="38"
                                    :src="require('@/assets/images/avatar.jpeg')"
                            >
                            </Avatar>
                            <span class="contact-info">
                                <span class="contact-name">
                                    {{user.firstName}} {{user.lastName}}
                                </span>
                                <span class="contact-status">
                                    Был(-а) недавно
                                </span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Avatar from "../Avatar";
    export default {
        name: "CreateChat",
        components: {Avatar},
        data () {
            return {
                items: [
                    {
                        letter: 'И',
                        users: [
                            {
                                firstName: 'Иван',
                                lastName: 'Крылов'
                            },
                            {
                                firstName: 'Иван',
                                lastName: 'Крылов'
                            },
                            {
                                firstName: 'Иван',
                                lastName: 'Крылов'
                            }
                        ]
                    },
                    {
                        letter: 'М',
                        users: [
                            {
                                firstName: 'Марина',
                                lastName: 'Терехова'
                            },
                            {
                                firstName: 'Марина',
                                lastName: 'Терехова'
                            },
                            {
                                firstName: 'Марина',
                                lastName: 'Терехова'
                            },
                            {
                                firstName: 'Марина',
                                lastName: 'Терехова'
                            },
                            {
                                firstName: 'Марина',
                                lastName: 'Терехова'
                            },
                            {
                                firstName: 'Марина',
                                lastName: 'Терехова'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.create-chat {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 70vh;
}

.line {
    width: 32px;
    height: 4px;
    background: #EAECEC;
    border-radius: 30px;
    margin-top: 10px;
}

.create-group-chat-button-icon {
    width: 22px;
    height: 15px;
    background-image: url(../../assets/images/group-chat.svg);
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
}

.head {
    width: 100%;
    margin-top: 24px;
}

.body {
    width: 100%;
    overflow: scroll;
}

.body::-webkit-scrollbar {
    display: none;
}

.body::-webkit-scrollbar-track {
    background-color: transparent;
}

.contacts {
    padding-bottom: 81px;
}

.contacts-block-head {
    background: #F4F6F9;
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #E6E6E6;
    display: block;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #8D8D8D;
}

.contact-item {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
}

.contact-info {
    display: block;
    margin-left: 16px;
}

.contact-name {
    display: block;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: -0.02px;
    color: #000000;
}

.contact-status {
    display: block;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.14px;
    color: #7C7C7C;
    margin-top: 4px;
}
</style>