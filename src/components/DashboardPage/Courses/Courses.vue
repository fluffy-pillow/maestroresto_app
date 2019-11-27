<template>
    <section class="courses">
        <PreloadBlock :class="{show: !bShow}" v-if="!$parent.bLoaded"></PreloadBlock>
        <LoadedBlock
                v-if="bShow"
                :class="{show: bShow}"
                :unfinished-courses="unfinishedCourses"
        >

        </LoadedBlock>
    </section>
</template>

<script>
    import PreloadBlock from "./PreloadBlock";
    import LoadedBlock from "./LoadedBlock";
    export default {
        name: "Courses",
        components: {LoadedBlock, PreloadBlock},
        props: {
            unfinishedCourses: {
                type: Array
            }
        },
        computed: {
            bShow () {
                return this.unfinishedCourses !== null
            }
        }
    }
</script>

<style scoped>
.courses {
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
