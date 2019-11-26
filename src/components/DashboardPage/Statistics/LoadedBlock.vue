<template>
    <section class="loaded-block">
        <div class="head">
            <h2 class="title">
                {{status.text}}
            </h2>
            <Stars class="stars" :offset="4" :size="18" :level="status.rating"></Stars>
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
    import Stars from "../../Stars";
    export default {
        name: "Statistics",
        components: {Stars, Progress, Position},
        props: {
            status: Object,
            leaderboard: Object,
            loyalty: Object
        }
    }
</script>

<style scoped>
    .loaded-block {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
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
