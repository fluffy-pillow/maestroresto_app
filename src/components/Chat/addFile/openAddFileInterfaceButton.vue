<template>
    <button class="open-add-file-interface-button" @click="handleClick">
    </button>
</template>

<script>
    export default {
        name: "openAddFileInterfaceButton",
        methods: {
            handleClick () {
                console.log(1111)
                this.$parent.bOpenAddFileInterface = true
            }
        }
    }
</script>

<style scoped>
    .open-add-file-interface-button {
        width: 32px;
        height: 32px;
        background-image: url(../../../assets/images/plus-green.svg);
        background-position: center center;
        background-size: 17px;
        background-repeat: no-repeat;
        border-radius: 50%;
        background-color: #ffffff;
        align-self: center;
        margin-left: 9px;
    }


</style>