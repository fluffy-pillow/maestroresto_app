<template>
    <ul class="users-list">
        <li
                v-for="(item, key) of items"
                :key="key"
                class="users-block"
        >
                    <span class="users-block-head" v-if="alphabeticalOrdered">
                        {{item.letter}}
                    </span>
            <ul class="users-part-list">
                <li
                        v-for="(user, key) of item.users"
                        :key="key"
                        class="contact-item"
                >
                    <label class="checkbox-label" @click="openChat">
                        <span class="checkbox-wrapper" v-if="$parent.bGroup">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </span>

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
                    </label>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import Avatar from "../Avatar";
    export default {
        name: "UsersList",
        components: {Avatar},
        props: {
            alphabeticalOrdered: {
                type: Boolean,
                default: true
            }
        },
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
        },
        methods: {
            openChat () {
                if (!this.$parent.bGroup) {
                    this.$eventBus.$emit('close-action-sheet')
                    this.$router.push(this.$route.path + '/correspondence/1')
                }
            }
        }
    }
</script>

<style scoped>
    .users-list {
        padding-bottom: 81px;
    }

    .users-block-head {
        background: #F4F6F9;
        height: 30px;
        line-height: 30px;
        display: block;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 12px;
        letter-spacing: -0.2px;
        color: #8D8D8D;
        font-family: Gilroy;
    }

    .contact-item {
        border-bottom: 1px solid #E6E6E6;
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

    .checkbox-label {
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        align-items: center;
    }

    .checkbox-wrapper {
        position: relative;
        width: 25px;
        height: 25px;
        margin-right: 16px;
    }

    .checkbox-label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        border: 1px solid #DADADA;
        border-radius: 50%;
    }

    .checkbox-label input:checked ~ .checkmark {
        background-color: #3DD498;
        border: 1px solid #3DD498;
    }

    .checkbox-label:after {
        content: "";
        position: absolute;
        display: none;
    }

    .checkbox-label input:checked ~ .checkmark:after {
        display: block;
    }

    .checkmark:after {
        content: "";
        position: relative;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

</style>