<template>
    <v-ons-page class="menu">
        <Header></Header>
        <main>
            <MenuList>
                <MenuItem
                        v-for="(item, key) of items"
                        :key="key"
                        :data="item"
                >
                </MenuItem>
            </MenuList>
        </main>
    </v-ons-page>
</template>

<script>
    import Header from "../components/MenuPage/Header";
    import MenuList from "../components/MenuPage/MenuList";
    import MenuItem from "../components/MenuPage/MenuItem";

    export default {
        name: "Menu",
        components: {MenuItem, MenuList, Header},
        data () {
            return {
                items: [
                    {
                        type: 'default',
                        title: 'Написать владельцу',
                        class: 'write',
                        path: 'support'
                    },
                    {
                        type: 'notifications',
                        title: 'Уведомления',
                        class: 'notifications',

                    },
                    {
                        type: 'default',
                        title: 'Настройки',
                        class: 'settings',
                    },
                    {
                        type: 'default',
                        title: 'Помощь',
                        class: ' help',
                        path: 'help'
                    },
                    {
                        type: 'default',
                        title: 'Выход',
                        class: ' exit',
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