<template>
    <v-ons-page class="help">
        <StickyHeader :title="'Помощь'"></StickyHeader>
        <MainHelp></MainHelp>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import MainHelp from "../components/MenuPage/HelpPage/MainHelp";
    export default {
        name: "Help",
        components: {MainHelp, StickyHeader}
    }
</script>

<style scoped>

</style>