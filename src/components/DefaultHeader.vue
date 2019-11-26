<template>
    <header>
        <div class="content">
            <v-ons-back-button class="close-button" :class="closeButtonVariant">
            </v-ons-back-button>
        </div>
    </header>
</template>

<script>
    export default {
        name: "DefaultHeader",
        props: {
            closeButtonVariant: {
                type: String,
                default: 'arrow'
            }
        }
    }
</script>

<style scoped>
    header {
        height: calc(44px + constant(safe-area-inset-top));
        height: calc(44px + env(safe-area-inset-top));
        display: flex;
        align-items: flex-end;
    }

    .content {
        display: flex;
        align-items: center;
        height: 44px;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
    }

    .close-button {
        width: 30px;
        height: 30px;
        min-height: 30px;
        padding: 0;
        background-color: rgba(97, 112, 125, 0.1);
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .close-button.arrow {
        background-image: url(../assets/images/arrow-left.svg);
    }

    .close-button.cross {
        background-image: url(../assets/images/cross.svg);
        margin-left: auto;
    }

</style>