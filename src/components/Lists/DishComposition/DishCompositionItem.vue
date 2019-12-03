<template>
    <li class="composition-item">
        <div class="col">
            {{data.name}}
        </div>
        <div class="col">
            {{data.weight}}
        </div>
    </li>
</template>

<script>
    export default {
        name: "DishCompositionItem",
        props: {
            data: Object
        }
    }
</script>

<style scoped>
    .composition-item {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-top: 16px;
    }

    .composition-item:first-child {
        margin-top: 0;
    }

    .composition-item:before {
        content: "";
        border: 1px dashed #61707D;
        position: absolute;
        width: 98%;
        top: 50%;
    }

    .col {
        letter-spacing: 0.16px;
        font-size: 14px;
        line-height: 16px;
        color: #61707D;
        background: #f7f8f9;
        position: relative;
    }

    .col:first-child {
        padding-right: 10px;
    }

    .col:last-child {
        padding-left: 10px;
    }

</style>