<template>
    <v-ons-page class="favorite" @show="onShowPage">
        <Header :title="'Избранное'"></Header>
        <MainFavorite :favorite="favorite"></MainFavorite>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../components/Favorite/Header";
    import MainFavorite from "../components/Favorite/MainFavorite";

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
        },
        methods: {
            onShowPage () {
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show'
            })
        }
    }
</script>

<style scoped>

</style>