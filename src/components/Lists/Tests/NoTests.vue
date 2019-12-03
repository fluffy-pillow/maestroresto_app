<template>
    <div class="no-tests">
        <div class="content">
            <div class="icon">

        </div>
            <div class="text">
                Тесты станут доступными после прохождения материалов
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NoTests"
    }
</script>

<style scoped>
.no-tests {
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
    background-image: url(../../../assets/images/certifications.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>