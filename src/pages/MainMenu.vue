<template>
    <v-ons-page class="main-menu">
        <StickyHeader :title="'Основное меню'"></StickyHeader>
        <main >
            <Tabbar
                    :active-index.sync="activeIndex"
                    :tabs="tabs"
                    class="tabbar-list-wrapper"
                    :type="'pills'"
                    :offset="9.75"
            >
            </Tabbar>
            <TabsContent :active-index="activeIndex" :tabs="tabs"></TabsContent>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "@/components/StickyHeader";
    import Tabbar from "../components/Tabbar";
    import TabsContent from "../components/TabsContent";
    import FavoriteFoodList from "@/components/TabContent/FavoriteFoodList";
    export default {
        name: "MainMenu",
        components: {TabsContent, Tabbar, StickyHeader},
        data () {
            return {
                activeIndex: 0,
                tabs: [
                    {
                        title: 'Горячее',
                        component: FavoriteFoodList,
                        props: {
                            list: [
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                },
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Салаты',
                        component: FavoriteFoodList,
                        props: {
                            list: [
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                },
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Напитки',
                        component: FavoriteFoodList,
                        props: {
                            list: [
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                },
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Десерты',
                        component: FavoriteFoodList,
                        props: {
                            list: [
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                },
                                {
                                    title: 'Отбивные по-французски',
                                    weight: '250 гр.',
                                    image: 'french-meat.png'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
    }

    .tabbar-list-wrapper {
        margin-top: 18px;
    }

</style>