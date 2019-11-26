<template>
    <v-ons-page class="favorite">
        <Header :title="'Избранное'"></Header>
        <MainFavorite :favorite="favorite"></MainFavorite>
    </v-ons-page>
</template>

<script>
    import Header from "../components/Header";
    import MainFavorite from "../components/FavoritePage/MainFavorite";

    export default {
        name: "Favorite",
        components: {MainFavorite, Header},
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