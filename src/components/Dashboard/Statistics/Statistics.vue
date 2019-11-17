<template>
    <section class="statistics">
        <PreloadBlock :class="{show: !bShow}"></PreloadBlock>
        <LoadedBlock
                v-if="bShow"
                :class="{show: bShow}"
                :status="status"
                :leaderboard="leaderboard"
                :loyalty="loyalty"
        ></LoadedBlock>
    </section>
</template>

<script>
    import PreloadBlock from "./PreloadBlock";
    import LoadedBlock from "./LoadedBlock";
    export default {
        name: "Statistics",
        components: {LoadedBlock, PreloadBlock},
        props: {
            status: Object,
            leaderboard: Object,
            loyalty: Object
        },
        computed: {
            bShow () {
                return (this.status && this.leaderboard && this.loyalty)
            }
        }
    }
</script>

<style scoped>
.statistics {
    margin-top: 20px;
    position: relative;
    min-height: 138px;
    display: flex;
}

.preload-block.show, .loaded-block.show {
    opacity: 1;
    visibility: visible;
}

.preload-block, .loaded-block {

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
}

.preload-block {
    position: absolute;
}

</style>
