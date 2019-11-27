<template>
    <v-ons-page class="favorite">
        <StickyHeader :title="'Избранное'"></StickyHeader>
        <main>
            <FavoriteList>
                <FavoriteItem
                        v-for="(item, key) of favorite"
                        :key="key"
                        :data="item"
                >
                </FavoriteItem>
            </FavoriteList>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import FavoriteList from "../components/LearningPage/Favorite/FavoriteList";
    import FavoriteItem from "../components/LearningPage/Favorite/FavoriteItem";

    export default {
        name: "Favorite",
        components: {FavoriteItem, FavoriteList, StickyHeader},
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
    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 81px;
    }
</style>