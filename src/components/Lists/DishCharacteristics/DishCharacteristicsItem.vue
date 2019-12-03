<template>
    <li class="dish-characteristics-item">
        <div class="value">
            {{data.value}}
        </div>
        <div class="name">
            {{data.name}}
        </div>
    </li>
</template>

<script>
    export default {
        name: "DishCharacteristicsItem",
        props: {
            data: Object
        }
    }
</script>

<style scoped>
    .dish-characteristics-item {
        border: 1px solid #D8D8D8;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 16px;
        width: calc(50% - 8px);
        margin-top: 8px;
        margin-left: 8px;
    }

    .dish-characteristics-item:first-child {
        border: 1px solid #3DD498;
    }

    .value {
        letter-spacing: 0.16px;
        font-size: 14px;
        line-height: 16px;
        color: #61707D;
    }

    .name {
        letter-spacing: 0.16px;
        font-size: 14px;
        line-height: 16px;
        margin-top: 16px;
        color: #61707D;
    }

</style>