<template>
    <section class="contacts">
        <FavoriteContacts></FavoriteContacts>
        <ContactsList></ContactsList>
    </section>
</template>

<script>
    import FavoriteContacts from "./FavoriteContacts";
    import ContactsList from "./ContactsList";
    export default {
        name: "Contacts",
        components: {ContactsList, FavoriteContacts}
    }
</script>

<style scoped>

</style>