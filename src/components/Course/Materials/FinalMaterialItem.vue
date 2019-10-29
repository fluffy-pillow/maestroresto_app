<template>
    <li class="final-material-item">
        <span class="head">
            <span class="icon-wrapper">
                <span class="icon">
                    <img :src="require('@/assets/uploads/material.jpeg')">
                </span>
            </span>
            <span class="title">
                Итоговая аттестация
            </span>
        </span>
        <span class="body">
            Для прохождения итоговой аттестации завершите предыдущие материалы.
        </span>
        <span class="footer">
            <button class="begin-button">
                Пройти аттестацию
            </button>
        </span>
    </li>
</template>
<script>
    export default {
        name: "FinalMaterialItem"
    }
</script>

<style scoped>
    .final-material-item {
        background: #3DD498;
        border-radius: 16px;
        margin-top: 16px;
        overflow: hidden;
        padding-bottom: 24px;

    }

    .head {
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 16px;
        display: flex;
        align-items: center;
    }

    .material-item.locked .head,  .material-item.locked .body {
        opacity: 0.5;
    }

    .icon-wrapper {
        width: 100px;
        min-width: 100px;
        height: 64px;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
    }

    .icon {
        width: 100px;
        min-width: 100px;
        height: 64px;
        display: block;
    }

    .icon img {
        width: 100%;
        height: auto;
    }

    .body {
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 16px;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.078px;
        color: #ffffff;
        white-space: initial;
        display: flex;
    }

    .footer {
        display: flex;
        padding-left: 22px;
        padding-right: 22px;
    }

    .title {
        letter-spacing: 0.16px;
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        color: #ffffff;
        margin-left: 12px;
    }

    .begin-button {
        color: #FFFFFF;
        border-radius: 16px;
        border: 1px solid #FFFFFF;
        background: rgba(255, 255, 255, 0.4);
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        height: 50px;
        width: 100%;
    }


</style>