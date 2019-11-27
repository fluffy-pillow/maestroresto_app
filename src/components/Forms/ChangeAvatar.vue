<template>
    <section class="change-avatar">
        <div class="content">
            <div class="avatar">
                <img  :src="require('@/assets/images/avatar.jpeg')">
            </div>
            <div class="edit-button-wrapper">
                <button class="edit-button">
                    Редактировать фото
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ChangeAvatar"
    }
</script>

<style scoped>
    .change-avatar {
        height: 270px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .avatar {
        width: 105px;
        height: 105px;
        overflow: hidden;
        border-radius: 50%;
    }

    .avatar img {
        width: 100%;
        height: auto;
        margin-top: -25%;
    }

    .edit-button-wrapper {
        margin-top: 24px;
    }

    .edit-button {
        letter-spacing: -0.4px;
        font-size: 15px;
        line-height: 22px;
        color: #3DD498;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>