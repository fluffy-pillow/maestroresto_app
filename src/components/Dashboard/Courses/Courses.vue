<template>
    <section class="courses">
        <PreloadBlock :class="{show: !unfinishedCourses}"></PreloadBlock>
        <LoadedBlock
                v-if="unfinishedCourses"
                :class="{show: unfinishedCourses}"
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
            unfinishedCourses: Array
        }
    }
</script>

<style scoped>
.courses {
    min-height: 236px;
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
