<template>
    <v-ons-page class="learning">
        <div class="bg-circles">
          <svg width="293" height="303" viewBox="0 0 293 303" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="146.5" cy="146.5" r="146" stroke="#F2F4F5"/>
            <circle cx="156.5" cy="176.5" r="126" stroke="#F2F4F5"/>
          </svg>
        </div>
        <Search></Search>
        <main class="main-learning">
            <Favorite></Favorite>
            <Courses></Courses>
            <Structure></Structure>
            <SalesTechnique></SalesTechnique>
        </main>
    </v-ons-page>
</template>

<script>
    import Search from "@/components/LearningPage/Search/Search";
    import Favorite from "../components/LearningPage/Favorite/Favorite";
    import Courses from "../components/LearningPage/Courses/Courses";
    import Structure from "../components/LearningPage/Structure/Structure";
    import SalesTechnique from "../components/LearningPage/SalesTechnique/SalesTechnique";
    export default {
        name: "Learning",
        components: {SalesTechnique, Structure, Courses, Favorite, Search}
    }
</script>

<style scoped>
.bg-circles {
  position: absolute;
  top: -88px;
  left: -75px;
  z-index: -1;
}

main {
    padding-bottom: 64px;
    padding-top: 44px;
}

.learning {
    background-color: #ffffff !important
}
</style>
