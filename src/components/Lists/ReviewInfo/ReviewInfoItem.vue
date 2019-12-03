<template>
    <li class="review-info-item">
        <span class="icon" :class="data.type">

        </span>
        <span class="text">
            {{data.text}}
        </span>
    </li>
</template>

<script>
    export default {
        name: "ReviewInfoItem",
        props: {
            data: Object
        }
    }
</script>

<style scoped>
.review-info-item {
    width: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.icon {
    min-width: 32px;
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgba(97,112,125, 0.1);
    border-radius: 10px;
    display: block;
}

.text {
    letter-spacing: 0.16px;
    color: #61707D;
    font-size: 14px;
    line-height: 16px;
    margin-left: 16px;
}

.icon.training {
    background-image: url(../../../assets/images/training.svg);
}

.icon.certification {
    background-image: url(../../../assets/images/certification-icon.svg);
}

.icon.materials {
    background-image: url(../../../assets/images/materials.svg);
}

.icon.time {
    background-image: url(../../../assets/images/time.svg);
}

.icon.type {
    background-image: url(../../../assets/images/type.svg);
}
</style>