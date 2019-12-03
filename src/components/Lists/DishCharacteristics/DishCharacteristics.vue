<template>
    <section class="characteristics">
        <div class="head">
            пищевая ценность на 100 г.
        </div>
        <div class="body">
            <DishCharacteristicsList>
                <DishCharacteristicsItem
                        v-for="(item, key) of items"
                        :key="key"
                        :data="item"
                ></DishCharacteristicsItem>
            </DishCharacteristicsList>
        </div>
    </section>
</template>

<script>
    import DishCharacteristicsList from "./DishCharacteristicsList";
    import DishCharacteristicsItem from "./DishCharacteristicsItem";
    export default {
        name: "DishCharacteristics",
        components: {DishCharacteristicsItem, DishCharacteristicsList},
        data () {
            return {
                items: [
                    {
                        name: 'калории',
                        value: '1000 ккал'
                    },
                    {
                        name: 'калории',
                        value: '1000 ккал'
                    },
                    {
                        name: 'калории',
                        value: '1000 ккал'
                    },
                    {
                        name: 'калории',
                        value: '1000 ккал'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.characteristics {
    margin-top: 24px;
}

</style>