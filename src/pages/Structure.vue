<template>
    <v-ons-page class="structure">
        <StickyHeader :title="'Структура работы ресторана'"></StickyHeader>
        <main>
            <StructureList>
                <StructureItem
                        v-for="(item, key) of items"
                        :key="key"
                        :data="item"
                >
                </StructureItem>
            </StructureList>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import StructureList from "../components/LearningPage/Structure/StructureList";
    import StructureItem from "../components/LearningPage/Structure/StructureItem";
    export default {
        name: "Structure",
        components: {StructureItem, StructureList, StickyHeader},
        data () {
            return {
                items: [
                    {
                        percents: 57,
                        name: 'Основы ресторанного бизнеса',
                        exercises: 14,
                        time: 14,
                        image: 'restaurant-basics.jpeg'
                    },
                    {
                        percents: 100,
                        result: 3,
                        name: 'Продукт ресторана – ресторан продает атмосферу удовольствия',
                        exercises: 12,
                        time: 64,
                        image: 'restaurant-product.jpeg'
                    },
                    {
                        percents: 0,
                        name: 'Персонал ресторана и его функциональные обязанности',
                        exercises: 21,
                        time: 28
                    }
                ]
            }
        },
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