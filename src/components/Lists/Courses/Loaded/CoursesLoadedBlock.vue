<template>
    <section class="loaded-block">
        <CoursesHead v-if="$parent.showHead"></CoursesHead>
        <div class="body">
            <CoursesList v-if="unfinishedCourses && unfinishedCourses.length > 0">
                <CourseItem
                        v-for="(course, key) of unfinishedCourses"
                        :key="key"
                        :data="course"
                >

                </CourseItem>
            </CoursesList>
            <NoCourses v-else>

            </NoCourses>
        </div>
    </section>
</template>

<script>
    import CourseItem from "./CourseItem";
    import CoursesList from "./CoursesList";
    import NoCourses from "./NoCourses";
    import CoursesHead from "./CoursesHead";
    export default {
        name: "CoursesLoadedBlock",
        components: {CoursesHead, NoCourses, CoursesList, CourseItem},
        props: {
            unfinishedCourses: Array
        }
    }
</script>

<style scoped>
    .loaded-block{
        width: 100%;
        padding-top: 20px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
    }

    .arrow {
        display: flex;
    }


</style>
