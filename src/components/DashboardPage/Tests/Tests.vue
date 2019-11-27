<template>
    <section class="tests">
        <PreloadBlock :class="{show: !bShow}" v-if="!$parent.bLoaded"></PreloadBlock>
        <LoadedBlock
                v-if="bShow"
                :unfinished-tests="unfinishedTests"
                :class="{show: bShow}"
        >
        </LoadedBlock>
    </section>
</template>

<script>
    import LoadedBlock from "./LoadedBlock";
    import PreloadBlock from "./PreloadBlock";


    export default {
        name: "Tests",
        components: {PreloadBlock, LoadedBlock},
        props: {
            unfinishedTests: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            bShow () {
                return this.unfinishedTests !== null
            }
        }
    }
</script>

<style scoped>
.tests {
    margin-bottom: 22px;
}

.preload-block.show, .loaded-block.show {
    opacity: 1;
    visibility: visible;
    position: relative;
}

.preload-block, .loaded-block {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, position 0.2s ease-in-out 0.2s;
}

.preload-block {
    z-index: 3;
    position: absolute;
}
</style>
