<template>
    <div class="add-member-head">
        <button class="add-member-head-button">
                <span class="add-member-head-button-icon">

                </span>
            <span class="add-member-head-button-text">
                    Добавить участника
            </span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "AddMemberHead"
    }
</script>

<style scoped>
    .add-member-head-button-icon {
        width: 22px;
        height: 15px;
        background-image: url(../../../assets/images/group-chat.svg);
        background-size: cover;
    }

    .add-member-head-button {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    .add-member-head-button-text {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.4px;
        color: #000000;
        margin-left: 16px;
        font-family: SFProText;
    }

    .add-member-head {
        width: 100%;
        margin-top: 16px;
        border-bottom: 1px solid #E6E6E6;
    }
</style>