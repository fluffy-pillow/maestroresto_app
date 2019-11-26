<template>
    <v-ons-page class="support">
        <StickyHeader :title="'Написать в техподдержку'"></StickyHeader>
        <MainSupport></MainSupport>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import MainSupport from "../components/MenuPage/SupportPage/MainSupport";
    export default {
        name: "Support",
        components: {MainSupport, StickyHeader}
    }
</script>

<style scoped>

</style>