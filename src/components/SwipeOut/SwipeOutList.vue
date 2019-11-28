<template>
    <ul class="swipeout-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "SwipeOutList"
    }
</script>

<style scoped>
    .swipeout-list {
        overflow: hidden;
    }
</style>