<template>
    <v-ons-page class="edit">
        <StickyHeader :title="'Профиль'">
            <div class="save-button-wrapper" slot="rightSideContent">
                <button class="save-button">
                    Сохранить
                </button>
            </div>
        </StickyHeader>
        <main>
            <ChangeAvatar></ChangeAvatar>
            <EditForm></EditForm>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import EditForm from "../components/Forms/EditForm";
    import ChangeAvatar from "../components/Forms/ChangeAvatar";
    export default {
        name: "Edit",
        components: {ChangeAvatar, EditForm, StickyHeader}
    }
</script>

<style scoped>
    .save-button-wrapper {
        display: flex;
        justify-content: flex-end;
    }

    .save-button {
        letter-spacing: 0.16px;
        font-size: 16px;
        line-height: 16px;
        margin-left: auto;
        color: #3DD498;
    }

    main {
        padding-top: 81px;
        margin-top: env(safe-area-inset-top);
        padding-bottom: 81px;
    }
</style>