<template>
    <v-ons-page class="chat">
        <StickyHeader :show-back-button="false" :title="'Чат'">
            <div class="write-button-wrapper" slot="rightSideContent">
                <button class="write-button" @click="handleClick">
                </button>
            </div>
        </StickyHeader>
        <main>
            <SearchInput :placeholder-text="'Поиск по контактам'"></SearchInput>
            <ChatContacts v-if="bResponse"></ChatContacts>
            <ContactsNotFound v-else></ContactsNotFound>
        </main>
    </v-ons-page>
</template>

<script>

    import StickyHeader from "../components/StickyHeader";
    import SearchInput from "../components/Search/SearchInput";
    import ChatContacts from "../components/Chat/Contacts";
    import ContactsNotFound from "../components/Chat/ContactsNotFound";
    import CreateChat from "../components/ActionSheetContent/CreateChat";
    export default {
        name: "Chat",
        components: {ContactsNotFound, ChatContacts, SearchInput, StickyHeader},
        data () {
            return {
                bResponse: true
            }
        },
        methods: {
            handleClick () {
                this.$eventBus.$emit('open-action-sheet', CreateChat)
            }
        }
    }
</script>

<style scoped>
.write-button {
    width: 24px;
    height: 24px;
    background-image: url(../assets/images/chat-write.svg);
    background-size: cover;
}

.write-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

main {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-bottom: 81px;
    height: calc(100% - 44px - 81px - env(safe-area-inset-top));
    display: flex;
    flex-direction: column;
}
</style>