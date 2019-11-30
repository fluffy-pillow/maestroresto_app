<template>
    <v-ons-page class="menu">
        <Header></Header>
        <main>
            <List :items="items" :attach-last-element-down="true" :content-offset="36"></List>
        </main>
    </v-ons-page>
</template>

<script>
    import Header from "../components/MenuPage/Header";
    import List from "../components/List";

    export default {
        name: "Menu",
        components: {List, Header},
        data () {
            return {
                items: [
                    {
                        type: 'default',
                        title: 'Написать владельцу',
                        icon: require('@/assets/images/write.svg'),
                        path: 'support'
                    },
                    {
                        type: 'notifications',
                        title: 'Уведомления',
                        icon: require('@/assets/images/notifications.svg'),
                        notifications: 3

                    },
                    {
                        type: 'default',
                        title: 'Настройки',
                        icon: require('@/assets/images/tuner.svg'),

                    },
                    {
                        type: 'default',
                        title: 'Помощь',
                        icon: require('@/assets/images/help.svg'),
                        path: 'help'
                    },
                    {
                        type: 'default',
                        title: 'Выход',
                        icon: require('@/assets/images/exit.svg'),

                    }
                ]
            }
        }

    }
</script>

<style scoped>
main {
    padding-top: 81px;
    margin-top: env(safe-area-inset-top);
    padding-bottom: 81px;
    height: calc(100% - 81px - 81px - env(safe-area-inset-top));
}
</style>