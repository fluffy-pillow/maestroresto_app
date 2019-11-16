<template>
    <main class="main-learning">
        <Favorite></Favorite>
        <Courses></Courses>
        <Structure></Structure>
        <SalesTechnique></SalesTechnique>
    </main>
</template>

<script>
    import Search from "./Search/Search";
    import Favorite from "./Favorite/Favorite";
    import Courses from "./Courses/Courses";
    import Structure from "./Structure/Structure";
    import SalesTechnique from "./SalesTechnique/SalesTechnique";
    export default {
        name: "MainLearning",
        components: {SalesTechnique, Structure, Courses, Favorite}
    }
</script>

<style scoped>
.main-learning {
  padding-bottom: 64px;
  padding-top: 44px;
}
</style>
