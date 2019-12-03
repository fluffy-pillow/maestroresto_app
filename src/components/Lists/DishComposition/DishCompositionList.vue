<template>
    <ul class="composition-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "DishCompositionList"
    }
</script>

<style scoped>
    .composition-list {
        background: rgba(239, 241, 242, 0.5);
        border-radius: 16px;
        padding: 16px;
    }
</style>