<template>
    <v-ons-page class="learning">
        <div class="bg-circles">
          <svg width="293" height="303" viewBox="0 0 293 303" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="146.5" cy="146.5" r="146" stroke="#F2F4F5"/>
            <circle cx="156.5" cy="176.5" r="126" stroke="#F2F4F5"/>
          </svg>
        </div>
        <Search></Search>
        <MainLearning></MainLearning>
    </v-ons-page>
</template>

<script>
    import MainLearning from "@/components/Learning/MainLearning";
    import Search from "@/components/Learning/Search/Search";
    export default {
        name: "Learning",
        components: {Search, MainLearning}
    }
</script>

<style scoped>
.bg-circles {
  position: absolute;
  top: -88px;
  left: -75px;
  z-index: -1;
}
</style>
