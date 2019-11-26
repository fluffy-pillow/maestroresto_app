<template>
    <v-ons-page class="edit">
        <StickyHeader :title="'Профиль'">
            <div class="save-button-wrapper" slot="rightSideContent">
                <button class="save-button">
                    Сохранить
                </button>
            </div>
        </StickyHeader>
        <MainEditPage></MainEditPage>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import MainEditPage from "../components/MenuPage/EditPage/MainEditPage";
    export default {
        name: "Edit",
        components: {MainEditPage, StickyHeader}
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

</style>