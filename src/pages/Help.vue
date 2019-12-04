<template>
    <v-ons-page class="help">
        <StickyHeader :title="'Помощь'"></StickyHeader>
        <main>
            <List class="list" :items="items" :item-height="44" :border-class="'border-bottom'"></List>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import List from "../components/List";
    export default {
        name: "Help",
        components: {List, StickyHeader},
        data () {
            return {
                items: [
                    {
                        title: 'Помощь',
                        path: ''
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
    }

    .list {
        margin-top: 64px;
    }
</style>