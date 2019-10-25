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
    display: flex;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 21px;
    scrollbar-width: none;
}

.favorite-list::-webkit-scrollbar {
    display: none;
}
</style>