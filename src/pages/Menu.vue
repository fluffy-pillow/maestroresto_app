<template>
    <v-ons-page class="menu" :class="{iphone: $ons.platform.isIPhone()}">
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
    height: calc(100vh - 49px);
    box-sizing: border-box;
}

.menu.iphone main {
    height: calc(100vh - 49px - env(safe-area-inset-top) * 2);
}
</style>