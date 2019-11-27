<template>
    <div class="avatar"
         :style="{backgroundImage: bg, width: size + 'px', height: size + 'px', minWidth: size + 'px'}"
    >
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            src: String,
            size: Number
        },
        computed: {
            bg () {
                return (this.src) ? 'url(' + this.src + ')' : 'url('+ require(`@/assets/images/no-avatar.svg`) + ')'
            }
        }
    }
</script>

<style scoped>
.avatar {
    background-size: cover;
    overflow: hidden;
    border-radius: 50%;
    background-position: center center;
}
</style>