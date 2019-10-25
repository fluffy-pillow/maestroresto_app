<template>
    <ul class="tests-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "TestsList"
    }
</script>

<style scoped>
.tests-list {
    display: flex;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 21px;
    scrollbar-width: none;
}

.tests-list::-webkit-scrollbar {
    display: none;
}
</style>