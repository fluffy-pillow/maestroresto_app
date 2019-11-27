<template>
    <div class="tabbar-list-wrapper" :class="type">
        <ul class="tabbar-list">
            <li class="tab-item"
                v-for="(tab, key) of tabs"
                :key="key"
                :class="{active: activeIndex === key}"
                :style="{marginLeft: offset + 'px'}"
            >
                <button class="tab-button"
                        @click="handleClick(key)"
                >
                    <span class="title">
                        {{tab.title}}
                    </span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        props: {
            activeIndex: Number,
            tabs: Array,
            type: {
                type: String,
                default: 'default'
            },
            offset: Number
        },
        methods: {
            handleClick (key) {
                this.$emit('update:activeIndex', key)
            }
        }
    }
</script>

<style scoped>
    .tabbar-list::-webkit-scrollbar {
        display: none;
    }

    .tabbar-list::-webkit-scrollbar-track {
        background-color: transparent;
    }


    .tabbar-list {
        display: flex;
        overflow-x: scroll;
        padding-bottom: 1px;
    }

    .tab-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        display: block;
        line-height: 50px;
        font-family: 'Rubik', sans-serif !important;
    }

    .tabbar-list-wrapper.pills .tab-item.active {
        background: linear-gradient(0deg, #FFC542, #FFC542) !important;
    }

    .tabbar-list-wrapper.pills .tab-item.active .tab-button {
        color: #ffffff !important;
    }


    .tabbar-list-wrapper.pills .tab-item {
        height: 54px;
        min-width: 94.25px;
        background: #FFFFFF;
        border: 1px solid #FFC542;
        box-sizing: border-box;
        border-radius: 16px;
    }

    .tabbar-list-wrapper.pills .tab-button {
        color: #61707D;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
    }

    .tabbar-list-wrapper.default {
        border-bottom: 1px solid #EFF1F2;
    }

    .tabbar-list-wrapper.default .tab-item {
        width: 50%;
        height: 50px;
    }

    .tabbar-list-wrapper.default .tab-button {
        color: #61707D;
        font-size: 16px;
        line-height: 22px;
        height: 50px;
    }

    .tabbar-list-wrapper.default  .tab-item.active .tab-button .title {
        border-bottom: 3px solid #3DD498;
        color: #4B4B4B;
    }

    .tabbar-list-wrapper.default  .tab-item .tab-button .title {
        border-bottom: 3px solid transparent;
        height: 47px;
    }
</style>