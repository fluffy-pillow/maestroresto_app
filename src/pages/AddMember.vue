<template>
    <v-ons-page class="add-member">
        <StickyHeader class="sticky-header"
                      :title="'Новый чат'"
                      :sub-title="'3 участника'"
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
            <AddMemberHead></AddMemberHead>
            <ContactsList :alphabetical-ordered="false"></ContactsList>
        </main>
    </v-ons-page>
</template>

<script>
    import Avatar from "../components/Avatar";
    import StickyHeader from "../components/StickyHeader";
    import ContactsList from "../components/Chat/UsersList";
    import AddMemberHead from "../components/Chat/Conference/AddMemberHead";
    export default {
        name: "AddMember",
        components: {AddMemberHead, ContactsList, StickyHeader, Avatar}
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