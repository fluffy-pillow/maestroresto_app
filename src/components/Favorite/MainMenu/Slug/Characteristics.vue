<template>
    <section class="characteristics">
        <div class="head">
            пищевая ценность на 100 г.
        </div>
        <div class="body">
            <div class="table">
                <div class="row">
                    <div class="title">
                        1000 ккал
                    </div>
                    <div class="desc">
                        Калории
                    </div>
                </div>
                <div class="row">
                    <div class="title">
                        3,76 г
                    </div>
                    <div class="desc">
                        Белки
                    </div>
                </div>
                <div class="row">
                    <div class="title">
                        3,76 г
                    </div>
                    <div class="desc">
                        Жиры
                    </div>
                </div>
                <div class="row">
                    <div class="title">
                        3,76 г
                    </div>
                    <div class="desc">
                        Углеводы
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Characteristics"
    }
</script>

<style scoped>
.characteristics {
    margin-top: 24px;
}

.table {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -8px;
    width: calc(100% + 8px);
}

.row {
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: calc(50% - 8px);
    margin-top: 8px;
    margin-left: 8px;
}

.row:first-child {
    border: 1px solid #3DD498;
}

.title {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    color: #61707D;
}

.desc {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    margin-top: 16px;
    color: #61707D;
}
</style>