<template>
    <div class="confirm-deletion-favorite">
        <div class="title">
            Вы действительно хотите удалить из избранного?
        </div>
        <div class="controls">
            <button class="remove-button" @click="removeItem">
                Удалить
            </button>
            <button class="cancel-button" @click="$eventBus.$emit('close-action-sheet')">
                Нет, оставим
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfirmDeletionFavorite",
        methods: {
            removeItem () {
                this.$eventBus.$emit('close-action-sheet')
            }
        }
    }
</script>

<style scoped>
.confirm-deletion-favorite {
    margin-top: 39px;
    padding-left: 16px;
    padding-right: 16px;
}

.title {
    letter-spacing: 0.04px;
    color: #000000;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
}

.controls {
    margin-top: 32px;
    width: 100%;
    margin-bottom: 74px;
}

.remove-button {
    background: #3DD498;
    border: 1px solid #3DD498;
    box-sizing: border-box;
    border-radius: 16px;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    width: 100%;
    height: 50px;
}

.cancel-button {
    width: 100%;
    color: #3DD498;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-top: 24px;
}

</style>