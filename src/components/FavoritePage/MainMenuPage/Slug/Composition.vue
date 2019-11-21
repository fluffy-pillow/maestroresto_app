<template>
    <section class="composition">
        <div class="head">
            <div class="head-left">
                Состав блюда
            </div>
            <div class="head-right">
                5 порций
            </div>
        </div>
        <div class="body">
            <div class="table">
                <div class="row">
                    <div class="col">
                        Картофель
                    </div>
                    <div class="col">
                        1 кг.
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Картофель
                    </div>
                    <div class="col">
                        1 кг.
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Картофель
                    </div>
                    <div class="col">
                        1 кг.
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Картофель
                    </div>
                    <div class="col">
                        1 кг.
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        Картофель
                    </div>
                    <div class="col">
                        1 кг.
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Composition"
    }
</script>

<style scoped>
.composition {
    margin-top: 24px;
}

.head {
    display: flex;
    justify-content: space-between;
}

.head-left {
    text-transform: uppercase;
    color: #4B4B4B;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
}

.head-right {
    text-transform: uppercase;
    color: #61707D;
    font-size: 13px;
    line-height: 22px;
}

.body {
    margin-top: 16px;
}

.table {
    background: rgba(239, 241, 242, 0.5);
    border-radius: 16px;
    padding: 16px;
}

.row {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 16px;
}

.row:first-child {
    margin-top: 0;
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

.row:before {
    content: "";
    border: 1px dashed #61707D;
    position: absolute;
    width: 98%;
    top: 50%;
}

</style>