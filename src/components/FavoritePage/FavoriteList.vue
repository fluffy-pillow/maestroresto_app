<template>
    <ul class="favorite-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "FavoriteList"
    }
</script>

<style scoped>
.favorite-list {
    margin-top: 16px;
}
</style>