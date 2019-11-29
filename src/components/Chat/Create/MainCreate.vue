<template>
    <div class="create-chat">
        <div class="line">
        </div>
        <CreateChatHead v-if="!bGroup"></CreateChatHead>
        <CreateGroupChatHead v-else></CreateGroupChatHead>
        <SelectedContacts v-if="bGroup"></SelectedContacts>
        <div class="body">
            <ContactsList></ContactsList>
        </div>
    </div>
</template>

<script>
    import ContactsList from "./ContactsList";
    import CreateChatHead from "./CreateChatHead";
    import CreateGroupChatHead from "./CreateGroupChatHead";
    import SelectedContacts from "./SelectedContacts";
    export default {
        name: "MainCreate",
        components: {SelectedContacts, CreateGroupChatHead, CreateChatHead, ContactsList},
        data () {
            return {
                bGroup: false,
            }
        }
    }
</script>

<style scoped>
    .create-chat {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 70vh;
    }

    .line {
        width: 32px;
        height: 4px;
        background: #EAECEC;
        border-radius: 30px;
        margin-top: 10px;
    }


    .body {
        width: 100%;
        overflow: scroll;
    }

    .body::-webkit-scrollbar {
        display: none;
    }

    .body::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>