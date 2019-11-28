<template>
    <div class="avatar"
         :style="{width: size + 'px', height: size + 'px', minWidth: size + 'px'}"
    >
        <div class="avatar-inner" :style="{backgroundImage: bg}" :class="{boxShadow: boxShadow}">

        </div>
        <div class="status" v-if="online || messages"
             :class="{online: online && !messages}"
        >
            <div class="messages" v-if="messages">
                {{messages}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            src: String,
            size: Number,
            online: {
                type: Boolean,
                default: null
            },
            messages: {
                type: Number,
                default: null
            },
            boxShadow: {
                type: Boolean,
                default: false
            }
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
    position: relative;
}

.avatar-inner {
    width: inherit;
    height: inherit;
    overflow: hidden;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
}
.avatar-inner.boxShadow {
    box-shadow: 0px -1px 13px rgba(0, 0, 0, 0.4);
}

.status {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 3px solid #F9FBFD;
    right: 0;
    bottom: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.status.online {
    background: #3DD498;
}

.messages {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */

    letter-spacing: -0.163333px;

    color: #00B956
}
</style>