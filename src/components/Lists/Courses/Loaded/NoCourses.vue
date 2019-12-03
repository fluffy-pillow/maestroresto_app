<template>
    <div class="no-courses">
        <div class="content">
            <div class="icon">

        </div>
            <div class="text">
                Начните обучение прямо сейчас!
            </div>
        </div>

        <button class="begin-button">
            Начать обучение
        </button>
    </div>
</template>

<script>
    export default {
            name: "NoCourses"
    }
</script>

<style scoped>
.no-courses {
    margin-top: 16px;
    padding-left: 20px;
    padding-right: 12px;
    padding-bottom: 20px;
}

.content {
    background: #F2F4F5;
    border-radius: 20px;
    padding-bottom: 15px;
    padding-left: 23px;
    padding-right: 31px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    min-height: 50px;
}

.text {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    color: #4B4B4B;
    margin-left: 21px;
}

.icon {
    width: 30px;
    min-width: 30px;
    height: 32px;
    display: flex;
    background-image: url(../../../../assets/images/learning.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}

.begin-button {
    background: #3DD498;
    border-radius: 16px;
    height: 50px;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    margin-top: 16px;
    width: 100%;
}
</style>