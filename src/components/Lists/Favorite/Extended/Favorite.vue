<template>
    <FavoriteList>
        <FavoriteItem
                v-for="(item, key) of favorite"
                :key="key"
                :data="item"
        >
        </FavoriteItem>
    </FavoriteList>
</template>

<script>
    import FavoriteItem from "./FavoriteItem";
    import FavoriteList from "./FavoriteList";
    export default {
        name: "Favorite",
        components: {FavoriteList, FavoriteItem},
        data () {
            return {
                favorite: [
                    {
                        type: 'barMenu',
                        name: 'Барное меню'
                    },
                    {
                        type: 'mainMenu',
                        name: 'Основное меню'
                    },
                    {
                        background: 'wine.jpeg',
                        type: 'other',
                        name: 'Расчет и подбор кухонной посуды'
                    },
                    {
                        background: 'barback.jpeg',
                        type: 'other',
                        name: 'Комната для курения'
                    },
                    {
                        background: 'barback.jpeg',
                        type: 'other',
                        name: 'Организация работы в цехе'
                    },
                    {
                        background: 'barback.jpeg',
                        type: 'other',
                        name: 'Организация работы в цехе'
                    },
                    {
                        background: 'barback.jpeg',
                        type: 'other',
                        name: 'Организация работы в цехе'
                    },
                    {
                        background: 'barback.jpeg',
                        type: 'other',
                        name: 'Организация работы в цехе'
                    },
                    {
                        background: 'barback.jpeg',
                        type: 'other',
                        name: 'Организация работы в цехе'
                    },
                ]
            }
        }

    }
</script>

<style scoped>

</style>