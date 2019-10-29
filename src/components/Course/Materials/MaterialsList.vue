<template>
    <ul class="materials-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "MaterialsList"
    }
</script>

<style scoped>
.materials-list {
    margin-top: 8px;
}
</style>