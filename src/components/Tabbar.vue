<template>
    <div class="tabbar-list-wrapper">
        <ul class="tabbar-list">
            <li class="tabbar-item"
                v-for="(tab, key) of tabs"
                :key="key"
                :class="[tabClass, {active: activeIndex === key}]"
                :style="{marginLeft: offset + 'px'}"
            >
                <button class="tabbar-button"
                        @click="handleClick(key)"
                >
                    <span class="title-wrapper">
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
            tabClass: String,
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

    .tabbar-item {
        display: flex;
        font-family: 'Rubik', sans-serif !important;
        align-items: center;
        justify-content: center;
    }
</style>