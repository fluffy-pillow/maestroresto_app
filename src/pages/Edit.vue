<template>
    <v-ons-page class="edit">
        <Header :title="'Профиль'">
            <div class="save-button-wrapper" slot="rightSideContent">
                <button class="save-button">
                    Сохранить
                </button>
            </div>
        </Header>
        <MainEditPage></MainEditPage>
    </v-ons-page>
</template>

<script>
    import Header from "../components/Header";
    import MainEditPage from "../components/MenuPage/EditPage/MainEditPage";
    export default {
        name: "Edit",
        components: {MainEditPage, Header}
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