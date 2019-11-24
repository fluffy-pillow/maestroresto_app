<template>
    <li class="menu-item">
        <span class="container" @click="openPage(data.path)">
            <span class="icon" :class="data.class">

            </span>
            <span class="title">
                {{data.title}}
            </span>
            <span class="notifications-count" v-if="data.type === 'notifications'">
                    3
            </span>
            <span class="arrow">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13979 13L8.80646 6.5L2.13979 0L0.806458 1.3L6.13979 6.5L0.806458 11.7L2.13979 13Z" fill="#D1D1D6"/>
                </svg>
            </span>
        </span>
    </li>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            data: Object
        },
        methods: {
            openPage (path) {
                if (path)
                    this.$router.push(this.$route.path + '/' + path)
            }
        }
    }
</script>

<style scoped>
.menu-item {
    min-height: 57px;
    display: flex;
}

.container {
    margin-left: 36px;
    border-top: 1px solid rgba(205,206,211, 0.5);
    width: 100%;
    display: flex;
    align-items: center;
}

.menu-item:first-child .container {
    border-top: 1px solid transparent;
}

.menu-item:last-child {
    margin-top: auto;
}

.menu-item:nth-child(2) {
    background: #F9FBFD;
}

.icon {
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-position: center center;
    display: block;
}

.icon.write {
    background-image: url(../../assets/images/write.svg);
}
.icon.notifications {
    background-image: url(../../assets/images/notifications.svg);
}
.icon.settings {
    background-image: url(../../assets/images/tuner.svg);
}
.icon.help {
    background-image: url(../../assets/images/help.svg);
}
.icon.exit {
    background-image: url(../../assets/images/exit.svg);
}

.title {
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    letter-spacing: -0.385882px;
    color: #61707D;
    margin-left: 16px;
}

.arrow {
    margin-left: auto;
    margin-right: 16px;
}

.notifications-count {
    background: #3DD498;
    border-radius: 11px;
    min-width: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    margin-left: 10px;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.163333px;
    color: #FFFFFF;
    padding-left: 6px;
    padding-right: 6px;
}
</style>