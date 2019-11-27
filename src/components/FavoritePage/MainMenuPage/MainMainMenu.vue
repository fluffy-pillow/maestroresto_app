<template>
    <main class="main-main-menu">
        <Tabbar
                :active-index.sync="activeIndex"
                :tabs="tabs"
                :tab-class="'tab'"
                class="tabbar-list-wrapper"
                :offset="9.75"
        >
        </Tabbar>
        <TabsContent :active-index="activeIndex" :tabs="tabs"></TabsContent>
    </main>
</template>

<script>
    import Tabbar from "@/components/Tabbar";
    import FoodList from "./FoodList";
    import TabsContent from "@/components/TabsContent";
    export default {
        name: "MainMainMenu",
        components: {TabsContent, Tabbar},
        data () {
            return {
                activeIndex: 0,
                tabs: [
                    {
                        title: 'Горячее',
                        component: FoodList,
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
                        component: FoodList,
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
                        component: FoodList,
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
                        component: FoodList,
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
.main-main-menu {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-bottom: 81px;
}

.tabbar-list-wrapper {
    margin-top: 18px;
}


</style>