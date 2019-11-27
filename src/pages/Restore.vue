<template>
    <v-ons-page class="restore">
        <DefaultHeader :close-button-variant="'cross'"></DefaultHeader>
        <main>
            <h1 class="title">Восстановить пароль</h1>
            <p class="desc">
                Укажите e-mail, к которому привязан этот аккаунт. Мы вышлем на него код для сброса пароля
            </p>
            <RestoreForm></RestoreForm>
        </main>
    </v-ons-page>
</template>

<script>
    import DefaultHeader from "../components/DefaultHeader";
    import RestoreForm from "../components/RestorePage/RestoreForm";
    export default {
      name: "Restore",
      components: {RestoreForm, DefaultHeader},
    }
</script>

<style scoped>
    main {
        padding-left: 16px;
        padding-right: 16px;
    }

    .title {
        margin-top: 16px;
    }

    .desc {
        color: #61707D;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        margin-top: 4px;
    }
</style>
