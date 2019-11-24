<template>
    <ul class="help-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "HelpList"
    }
</script>

<style scoped>
.help-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 64px;
}
</style>