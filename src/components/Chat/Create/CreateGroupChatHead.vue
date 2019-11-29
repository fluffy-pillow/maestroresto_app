<template>
    <div class="create-group-chat-head">
        <button class="create-chat-button" @click="$parent.bGroup = false">
        </button>
        <div class="title">
            Новый чат
        </div>
        <button class="next-button" @click="openGroupChat">
            Далее
        </button>
    </div>
</template>

<script>
    export default {
        name: "CreateGroupChatHead",
        methods: {
            openGroupChat () {
                this.$eventBus.$emit('close-action-sheet')
                this.$router.push(this.$route.path + '/conference/1')
            }
        }
    }
</script>

<style scoped>
.create-chat-button {
    width: 30px;
    height: 30px;
    background-color: rgba(97, 112, 125, 0.1);
    border-radius: 50%;
    background-image: url(../../../assets/images/arrow-left-white.svg);
    background-size: 8px 12px;
    background-position: center center;
    background-repeat: no-repeat;
    margin-left: 16px;
}

.create-group-chat-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 13px;
    width: 100%;
    padding-top: 14px;
    box-shadow: inset 0px -1px 0px #E6E6E6;
}

.title {
    font-weight: 500;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: -0.02px;
    color: #000000;
}

.next-button {
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02px;
    color: #3DD498;
    margin-right: 16px;
}
</style>