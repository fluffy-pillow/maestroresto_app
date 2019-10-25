<template>
    <ul class="tasks-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "TasksList"
    }
</script>

<style scoped>
.tasks-list {
    display: flex;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 21px;
    scrollbar-width: none;
}

.tasks-list::-webkit-scrollbar {
    display: none;
}
</style>