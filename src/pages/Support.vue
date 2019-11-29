<template>
    <v-ons-page class="support">
        <StickyHeader :title="'Написать в техподдержку'"></StickyHeader>
        <main>
            <Room :response="response"></Room>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import Room from "../components/Chat/Room";
    export default {
        name: "Support",
        components: {Room, StickyHeader},
        data () {
            return {
                response: [
                    {
                        from: 'me',
                        text: 'Уверен, что вы слышали выражение «Пойдем посидим». В нем заключается вся суть хождения по кафе, ресторанам и барам. В первую очередь люди ходят туда не вкусно и дешево поесть, а пообщаться – на других посмотреть и себя показать. Но при этом кухня всегда должна быть на уровне.'
                    },
                    {
                        from: 'me',
                        text: 'Уверен, что вы слышали выражение «Пойдем посидим». В нем заключается вся суть хождения по кафе, ресторанам и барам. В первую очередь люди ходят туда не вкусно и дешево поесть, а пообщаться – на других посмотреть и себя показать. Но при этом кухня всегда должна быть на уровне.'
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
        height: calc(100% - 44px - env(safe-area-inset-top));
    }
</style>