<template>
    <section>
        <MaterialsList>
            <MaterialItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
            >
            </MaterialItem>
            <FinalMaterialItem></FinalMaterialItem>
        </MaterialsList>
    </section>
</template>

<script>
    import MaterialsList from "./MaterialsList";
    import MaterialItem from "./MaterialItem";
    import FinalMaterialItem from "./FinalMaterialItem";
    export default {
        name: "Materials",
        components: {FinalMaterialItem, MaterialItem, MaterialsList},
        props: {
            items: Array
        }
    }
</script>

<style scoped>

</style>