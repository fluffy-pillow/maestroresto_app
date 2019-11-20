<template>
    <div class="main-menu-tabbar">
        <ul class="tabbar-list">
            <li class="tabbar-item"
                v-for="(item, key) of $parent.items"
                :key="key"
            >
                <button class="tabbar-button"
                        :class="{active: activeIndex === key}"
                        @click="handleClick(key)"
                >
                    {{item.title}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        props: {
            activeIndex: Number
        },
        methods: {
            handleClick (key) {
                this.$emit('update:activeIndex', key)
            }
        }
    }
</script>

<style scoped>
.main-menu-tabbar {
    margin-top: 18px;
}

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

.tabbar-button {
    min-width: 94.25px;
    height: 54px;
    border: 1px solid #FFC542;
    box-sizing: border-box;
    border-radius: 16px;
    background: #FFFFFF;
    text-align: center;
    color: #61707D;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
}

.tabbar-button.active {
    background: linear-gradient(0deg, #FFC542, #FFC542);
    color: #ffffff;
}

.tabbar-item {
    margin-left: 9.75px;
}

.tabbar-item:first-child {
    margin-left: 16px;
}
</style>