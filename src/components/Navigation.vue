<template>
    <v-ons-navigator swipeable swipe-target-width="200px"
                     :page-stack="pageStack"
                     :pop-page="goBack"
    ></v-ons-navigator>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                pageStack: []
            }
        },
        methods: {
            goBack() {
                this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
            }
        },
        created() {
            const mapRouteStack = route => this.pageStack = route.matched.map(m => {
               return m.components.default
            });
            mapRouteStack(this.$route);
            this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());
        }
    }
</script>

<style scoped>

</style>