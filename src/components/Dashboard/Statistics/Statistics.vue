<template>
    <section class="statistics">
        <div class="head">
            <h2 class="title">
                {{status.text}}
            </h2>
            <Rating :data="status.rating"></Rating>
        </div>
        <div class="body">
            <Position :position="leaderboard.position"></Position>
            <Progress :percent="loyalty.percent"></Progress>
        </div>
    </section>
</template>

<script>
    import Position from "./Position";
    import Progress from "./Progress";
    import Rating from "./Rating";
    export default {
        name: "Statistics",
        components: {Rating, Progress, Position},
        props: {
            status: Object,
            leaderboard: Object,
            loyalty: Object
        }
    }
</script>

<style scoped>
.statistics {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
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
