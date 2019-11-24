<template>
    <main class="main-edit-page">
        <EditAvatar></EditAvatar>
        <MainInfo></MainInfo>
    </main>
</template>

<script>
    import EditAvatar from "./EditAvatar";
    import MainInfo from "./MainInfo";
    export default {
        name: "MainEditPage",
        components: {MainInfo, EditAvatar}
    }
</script>

<style scoped>
    .main-edit-page {
        padding-top: 81px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
    }

</style>