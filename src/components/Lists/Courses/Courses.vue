<template>
    <section class="courses">
        <PreloadBlock :class="{show: !bShow}" v-if="!bLoaded"></PreloadBlock>
        <CoursesLoadedBlock
                v-if="bShow"
                :class="{show: bShow}"
                :unfinished-courses="unfinishedCourses"
        >

        </CoursesLoadedBlock>
    </section>
</template>

<script>
    import PreloadBlock from "./Preload/CoursesPreloadBlock";
    import CoursesLoadedBlock from "./Loaded/CoursesLoadedBlock";
    export default {
        name: "Courses",
        components: {CoursesLoadedBlock, PreloadBlock},
        props: {
            unfinishedCourses: {
                type: Array
            },
            showHead: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            bShow () {
                return this.unfinishedCourses !== null
            }
        },
        asyncComputed: {
            bLoaded () {
                if (this.unfinishedCourses !== null) {
                    return new Promise(resolve =>
                        setTimeout(() => resolve(true), 200))
                }
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
