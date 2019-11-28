<template>
    <section class="favorite-contacts">
        <ul class="favorite-contacts-list">
            <li class="favorite-contacts-item"
                v-for="(item, key) of items"
                :key="key"
            >
                <span class="content">
                    <Avatar
                            class="avatar"
                            :size="47"
                            :src="require('@/assets/images/avatar.jpeg')"
                            :online="item.online"
                            :messages="item.messages"
                    >
                    </Avatar>
                    <span class="name">{{item.name}}</span>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
    import Avatar from "../Avatar";
    export default {
        name: "FavoriteContacts",
        components: {Avatar},
        data () {
            return {
                items: [
                    {
                        name: 'Марина Терехова',
                        avatar: '@/assets/images/avatar.jpeg',
                        online: true,
                        messages: 3
                    },
                    {
                        name: 'Марина Терехова',
                        avatar: '@/assets/images/avatar.jpeg',
                        online: true,
                    },
                    {
                        name: 'Марина Терехова',
                        avatar: '@/assets/images/avatar.jpeg',
                        online: false,
                    },
                    {
                        name: 'Марина Терехова',
                        avatar: '@/assets/images/avatar.jpeg',
                        online: false,
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.favorite-contacts-list {
    overflow: scroll;
}

.favorite-contacts-item {
    width: 107px;
    height: 139px;
    background-color: rgba(223, 236, 243, 0.2);
    border-radius: 16px;
    margin-left: 8px;
    min-width: 107px;
}

.favorite-contacts-item:first-child {
    margin-left: 16px;
}

.favorite-contacts-list {
    display: flex;
}

.favorite-contacts-list::-webkit-scrollbar {
    display: none;
}

.favorite-contacts-list::-webkit-scrollbar-track {
    background-color: transparent;
}

.favorite-contacts {
    margin-top: 14px;
}

.content {
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.name {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02px;
    color: #000000;
    margin-top: 12px;
}
</style>