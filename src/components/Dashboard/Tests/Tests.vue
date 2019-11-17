<template>
    <section class="tests">
        <PreloadBlock :class="{show: !unfinishedTests}"></PreloadBlock>
        <LoadedBlock
                v-if="unfinishedTests"
                :unfinished-tests="unfinishedTests"
                :class="{show: unfinishedTests}"
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
            unfinishedTests: Array
        },
    }
</script>

<style scoped>
.tests {
    min-height: 212px;
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
