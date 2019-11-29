<template>
    <v-ons-page class="chat">
        <StickyHeader :show-back-button="false" :title="'Чат'">
            <div class="write-button-wrapper" slot="rightSideContent">
                <button class="write-button">
                </button>
            </div>
        </StickyHeader>
        <main>
            <SearchInput :placeholder-text="'Поиск по контактам'"></SearchInput>
            <Contacts v-if="bResponse"></Contacts>
            <ContactsNotFound v-else></ContactsNotFound>
        </main>
    </v-ons-page>
</template>

<script>

    import StickyHeader from "../components/StickyHeader";
    import SearchInput from "../components/Search/SearchInput";
    import Contacts from "../components/Chat/Contacts";
    import ContactsNotFound from "../components/Chat/ContactsNotFound";
    export default {
        name: "Chat",
        components: {ContactsNotFound, Contacts, SearchInput, StickyHeader},
        data () {
            return {
                bResponse: false
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