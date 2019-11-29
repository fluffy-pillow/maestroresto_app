<template>
    <v-ons-page class="conference">
        <StickyHeader class="sticky-header" :title="'Новый чат'"
        >
            <Avatar
                    class="avatar"
                    :size="28"
                    :src="require('@/assets/images/avatar.jpeg')"
                    slot="rightSideContent"
            >
            </Avatar>
        </StickyHeader>
        <main>
            <Room
                    :response="response"
                    :show-avatars="true"
                    :show-time-sent="true"
                    :show-interlocutor-typing="true"
            ></Room>
        </main>
    </v-ons-page>
</template>

<script>
    import Avatar from "../components/Avatar";
    import StickyHeader from "../components/StickyHeader";
    import Room from "../components/Chat/Room";
    export default {
        name: "Conference",
        components: {Room, StickyHeader, Avatar},
        data () {
            return {
                response: [
                    {
                        from: 'me',
                        text: 'Уверен, что вы слышали выражение «Пойдем посидим». В нем заключается вся суть хождения по кафе, ресторанам и барам. В первую очередь люди ходят туда не вкусно и дешево поесть, а пообщаться – на других посмотреть и себя показать. Но при этом кухня всегда должна быть на уровне.'
                    },
                    {
                        from: 'interlocutor',
                        text: 'Уверен, что вы слышали выражение «Пойдем посидим». В нем заключается вся суть хождения по кафе, ресторанам и барам. В первую очередь люди ходят туда не вкусно и дешево поесть, а пообщаться – на других посмотреть и себя показать. Но при этом кухня всегда должна быть на уровне.'
                    }
                ]
            }
        }


    }
</script>

<style scoped>
    .avatar {
        margin-left: auto;
    }

    main {
        padding-top: 44px;
        margin-top: env(safe-area-inset-top);
        height: calc(100% - 44px - env(safe-area-inset-top));
    }

    .sticky-header {
        border-bottom: 1px solid rgba(97, 112, 125, 0.1);
    }
</style>