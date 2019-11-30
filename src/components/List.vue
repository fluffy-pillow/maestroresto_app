<template>
    <ul class="list">
        <li class="item"
            v-for="(item, key) of items"
            :key="key"
            :style="{
                height: itemHeight + 'px',
                marginTop: (key === items.length - 1) ? 'auto' : '0',


            }"
            @click="openPage(item.path)"
        >
        <span class="container" :style="{
                borderBottom: ((key === items.length - 1 || key === items.length - 2) && items.length > 1) ?
                'unset' : ' 1px solid rgba(205,206,211, 0.5)',
                marginLeft: contentOffset + 'px'
            }">
            <span class="icon" v-if="item.icon" :style="{backgroundImage: 'url(' + item.icon +')'}">

            </span>
            <span class="title" :style="{marginLeft: (contentOffset < 16) ? '16px' : '0'}">
                {{item.title}}
            </span>
            <span class="notifications-count" v-if="item.notifications">
                    {{item.notifications}}
            </span>
            <span class="arrow">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13979 13L8.80646 6.5L2.13979 0L0.806458 1.3L6.13979 6.5L0.806458 11.7L2.13979 13Z" fill="#D1D1D6"/>
                </svg>
            </span>
        </span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "List",
        props: {
            items: Array,
            attachLastElementDown: {
                type: Boolean,
                default: false
            },
            itemHeight: {
                type: Number,
                default: 57
            },
            contentOffset: {
                type: Number,
                default: 0
            }
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
    .list {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .item {
        display: flex;
    }

    .container {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .item:nth-child(2) {
        background: #F9FBFD;
    }

    .icon {
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-position: center center;
        display: block;
        margin-right: 16px;
    }

    .title {
        font-size: 15px;
        line-height: 18px;
        /* identical to box height */
        letter-spacing: -0.385882px;
        color: #61707D;
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