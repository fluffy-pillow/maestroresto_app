<template>
    <v-ons-page class="test" ref="test">
        <StickyHeader :title="'вопрос ' + $route.params.id + ' из 3'"
                :color="'green'"
                :title-uppercase="true"
        >
        </StickyHeader>
        <MainTest></MainTest>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import MainTest from "../components/TestPage/MainTest";
    export default {
        name: "Test",
        components: {MainTest, StickyHeader}
    }
</script>

<style scoped>

</style>