<template>
    <ul class="menu-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "MenuList"
    }
</script>

<style scoped>
.menu-list {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>