<template>
    <div class="selected-contacts">
        <div class="container">
            Марина, Артем
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectedContacts"
    }
</script>

<style scoped>
.selected-contacts {
    width: 100%;
    display: flex;
}

.container {
    padding: 16px;
    min-height: 18px;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: -0.02px;
    color: #000000;
}
</style>