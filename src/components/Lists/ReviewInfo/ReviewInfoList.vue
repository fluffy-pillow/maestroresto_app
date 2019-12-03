<template>
    <ul class="review-info-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "ReviewInfoList"
    }
</script>

<style scoped>
    .review-info-list {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
    }
</style>