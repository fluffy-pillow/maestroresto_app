<template>
    <section class="structure">
        <StructureHead v-if="showHead"></StructureHead>
        <div class="body">
            <StructureList>
                <StructureItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
                >
                </StructureItem>
            </StructureList>

            <div class="more" v-if="showMoreButton">
                <button class="more-button">
                    Показать больше
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import StructureList from "./StructureList";
    import StructureItem from "./StructureItem";
    import StructureHead from "./StructureHead";
    export default {
        name: "Structure",
        components: {StructureHead, StructureItem, StructureList},
        props: {
            showHead: {
                type: Boolean,
                default: true
            },
            showMoreButton: {
                type: Boolean,
                default: true
            },

        },
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
        }
    }
</script>

<style scoped>
.structure {
    margin-top: 21px;
}



.body {
    padding-left: 16px;
    padding-right: 16px;
}

.more {
    margin-top: 16px;
}

.more-button {
    height: 50px;
    background: #FFFFFF;
    border: 1px solid rgba(61,212,152, 0.5);
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    color: #3DD498;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
}
</style>
