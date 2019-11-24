<template>
    <main class="main-menu">
        <MenuList>
            <MenuItem
                v-for="(item, key) of items"
                :key="key"
                :data="item"
            >
            </MenuItem>
        </MenuList>
    </main>
</template>

<script>
    import MenuList from "./MenuList";
    import MenuItem from "./MenuItem";
    export default {
        name: "MainMenu",
        components: {MenuItem, MenuList},
        data () {
            return {
                items: [
                    {
                        type: 'default',
                        title: 'Написать владельцу',
                        class: 'write'
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
.main-menu {
    padding-top: 81px;
    margin-top: env(safe-area-inset-top);
    padding-bottom: 81px;
    height: calc(100% - 81px - 81px - env(safe-area-inset-top));
}
</style>