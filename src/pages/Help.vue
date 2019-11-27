<template>
    <v-ons-page class="help">
        <StickyHeader :title="'Помощь'"></StickyHeader>
        <main>
            <HelpList>
                <HelpItem
                        v-for="(item, key) of items"
                        :key="key"
                        :data="item"
                >
                </HelpItem>
            </HelpList>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import HelpList from "../components/MenuPage/HelpPage/HelpList";
    import HelpItem from "../components/MenuPage/HelpPage/HelpItem";
    export default {
        name: "Help",
        components: {HelpItem, HelpList, StickyHeader},
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
</style>