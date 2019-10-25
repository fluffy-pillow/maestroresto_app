<template>
    <section class="statistics">
        <div class="head">
            <h2 class="title">
                Вы новичок
            </h2>
            <Rating></Rating>
        </div>
        <div class="body">
            <Position></Position>
            <Progress></Progress>
        </div>
    </section>
</template>

<script>
    import Position from "./Position";
    import Progress from "./Progress";
    import Rating from "./Rating";
    export default {
        name: "Statistics",
        components: {Rating, Progress, Position}
    }
</script>

<style scoped>
.statistics {
    padding-left: 20px;
    padding-right: 20px;
}

.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.body {
    margin-top: 20px;
    display: flex;
}

.title {
}
</style>
