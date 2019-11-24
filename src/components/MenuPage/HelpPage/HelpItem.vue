<template>
    <li class="help-item">
        <span class="container" @click="openPage(data.path)">
            <span class="title">
                {{data.title}}
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
        name: "HelpItem",
        props: {
            data: Object
        },
        methods: {
            openPage (path) {
                this.$router.push(this.$route.path + '/' + path)
            }
        }
    }
</script>

<style scoped>
.help-item {
    min-height: 44px;
    display: flex;
}

.container {
    border-bottom: 1px solid rgba(205,206,211, 0.5);
    width: 100%;
    display: flex;
    align-items: center;
}

.icon {
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-position: center center;
    display: block;
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
</style>