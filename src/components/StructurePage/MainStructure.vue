<template>
    <main class="main-structure">
        <StructureList>
            <StructureItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
            >
            </StructureItem>
        </StructureList>
    </main>
</template>

<script>

    import StructureList from "../LearningPage/Structure/StructureList";
    import StructureItem from "../LearningPage/Structure/StructureItem";
    export default {
        name: "MainStructure",
        components: {StructureItem, StructureList},
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
.main-structure {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 81px;
}
</style>