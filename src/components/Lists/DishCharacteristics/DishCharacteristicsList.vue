<template>
    <ul class="dish-characteristics-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "DishCharacteristicsList"
    }
</script>

<style scoped>
.dish-characteristics-list {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -8px;
    width: calc(100% + 8px);
}
</style>