<template>
    <ul class="courses-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "CoursesList"
    }
</script>

<style scoped>
.courses-list {
    display: flex;
    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 16px;
    padding-bottom: 21px;
    scrollbar-width: none;
}

.courses-list::-webkit-scrollbar {
    display: none;
}

.courses-list::-webkit-scrollbar-track {
    background-color: transparent;
}
</style>