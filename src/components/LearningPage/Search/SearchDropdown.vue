<template>
    <div class="search-dropdown" :class="{show: bShow}">
        <Tabbar
                :active-index.sync="activeIndex"
                :tabs="tabs"
                class="tabbar-list-wrapper"
        >
        </Tabbar>
      <TabsContent :active-index="activeIndex" :tabs="tabs"></TabsContent>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Tabbar from "../../Tabbar";
    import TabsContent from "../../TabsContent";
    import SearchResultMenu from "./SearchResultMenu";
    import SearchResultLearning from "./SearchResultLearning";

    export default {
        name: "SearchDropdown",
        components: {TabsContent, Tabbar},
        data () {
            return {
                bShow: false,
                activeIndex: 0,
                tabs: [
                    {
                        title: 'Меню',
                        component: SearchResultMenu,
                        key: 'menu',
                        props: {
                            data: [
                                {
                                    category: 'Красные вина',
                                    response: [
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                        {
                                            name: 'Винья Темпрана Олд Вайнс Гарнача',
                                            desc1: 'красное сухое',
                                            desc2: 'Испания, Кампо де Борха',
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                    ],
                                },
                                {
                                    category: 'Горячие блюда',
                                    response: [
                                        {
                                            name: 'Филе миньон с соусом борделез и картофелем конфи',
                                            desc1: 'очень вкусно',
                                            desc2: 'и аппетитно',
                                            image: 'dish.png',
                                            keyword: 'Филе'
                                        },
                                        {
                                            name: 'Филе миньон с соусом борделез и картофелем конфи',
                                            desc1: 'очень вкусно',
                                            desc2: 'и аппетитно',
                                            image: 'dish.png',
                                            keyword: 'Филе'
                                        },
                                        {
                                            name: 'Филе миньон с соусом борделез и картофелем конфи',
                                            desc1: 'очень вкусно',
                                            desc2: 'и аппетитно',
                                            image: 'dish.png',
                                            keyword: 'Филе'
                                        },
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        title: 'Обучение',
                        key: 'learning',
                        component: SearchResultLearning,
                        props: {
                            data: [
                                {
                                    category: 'Техника активных и эффективных \n' +
                                    'продаж',
                                    response: [
                                        {
                                            name: 'Алкогольные напитки на основе винограда (коньяк, бренди, арманьяк...)',
                                            exercises: 14,
                                            time: 15,
                                            image: 'dish.png',
                                            keyword: 'вино'
                                        },
                                    ]
                                }
                            ],
                        }
                    },
                ]
            }
        },
        computed: {
            ...mapGetters({
                query: 'search/getQuery'
            })
        },
        watch: {
            query: function (newValue) {
                if (newValue.length > 0) {
                    this.bShow = true
                } else {
                    this.bShow = false
                }
            }
        }
    }
</script>

<style scoped>

.search-dropdown {
    visibility: hidden;
    position: absolute;
    width: 100%;
    margin-top: 4px;
    transform-origin: top;
    opacity: 0;
    transform: scaleY(0);
    transition: all 0.1s ease-in-out;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 0;
}

.search-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
    height: calc(100vh - 48px);
}

</style>
