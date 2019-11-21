<template>
    <ul class="review-params-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "ReviewParamsList"
    }
</script>

<style scoped>
    .review-params-list {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
    }
</style>