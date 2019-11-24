<template>
    <main class="main-help">
        <HelpList>
            <HelpItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
            >
            </HelpItem>
        </HelpList>

    </main>
</template>

<script>
    import HelpList from "./HelpList";
    import HelpItem from "./HelpItem";
    export default {
        name: "MainHelp",
        components: {HelpItem, HelpList},
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
    .main-help {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
    }

</style>