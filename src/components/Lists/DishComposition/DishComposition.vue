<template>
    <section class="composition">
        <div class="head">
            <div class="head-left">
                Состав блюда
            </div>
            <div class="head-right">
                5 порций
            </div>
        </div>
        <div class="body">
            <DishCompositionList>
                <DishCompositionItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
                ></DishCompositionItem>
            </DishCompositionList>
        </div>
    </section>
</template>

<script>
    import DishCompositionList from "./DishCompositionList";
    import DishCompositionItem from "./DishCompositionItem";
    export default {
        name: "DishComposition",
        components: {DishCompositionItem, DishCompositionList},
        data () {
            return {
                items: [
                    {
                        name: 'Картофель',
                        weight: '1кг'
                    },
                    {
                        name: 'Картофель',
                        weight: '1кг'
                    },
                    {
                        name: 'Картофель',
                        weight: '1кг'
                    },
                    {
                        name: 'Картофель',
                        weight: '1кг'
                    },
                    {
                        name: 'Картофель',
                        weight: '1кг'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .composition {
        margin-top: 24px;
    }

    .head {
        display: flex;
        justify-content: space-between;
    }

    .head-left {
        text-transform: uppercase;
        color: #4B4B4B;
        font-weight: 500;
        font-size: 13px;
        line-height: 22px;
    }

    .head-right {
        text-transform: uppercase;
        color: #61707D;
        font-size: 13px;
        line-height: 22px;
    }

    .body {
        margin-top: 16px;
    }

</style>