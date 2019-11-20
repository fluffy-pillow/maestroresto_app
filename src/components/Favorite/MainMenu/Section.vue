<template>
    <section class="section" :class="{active: active}">
        <ul class="items-list">
            <li class="item"
                v-for="(item, key) of content"
                :key="key"
                @click="openMainMenuSlug"
            >
                <span class="container">
                    <span class="left">
                        <span class="image"
                              :style="{backgroundImage:
                                'url(https://s2.eda.ru/StaticContent/Photos/120131090202/120726192046/p_O.jpg)'}">

                        </span>
                    </span>
                    <span class="right">
                        <span class="title">
                            {{item.title}}
                        </span>
                        <span class="weight">
                            {{item.weight}}
                        </span>
                    </span>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Section",
        props: {
            content: Array,
            active: Boolean
        },
        methods: {
            openMainMenuSlug () {
                this.$router.push(this.$route.path + '/slug')
            }
        }
    }
</script>

<style scoped>
.section {
    width: 100vw;
    display: flex;
    height: 0;
    overflow: hidden;
}

.section.active {
    height: auto;
    overflow: auto;
}

.items-list {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    padding-bottom: 16px;
}

.item {
    padding-top: 8px;
    display: flex;
    min-height: 96px;
    background: #ffffff;
}

.container {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 16px;
    background: #ffffff;
    padding: 10px;
    display: flex;
}

.image {
    width: 76px;
    min-width: 76px;
    height: 76px;
    background-size: cover;
    background-position: center center;
    display: block;
    border-radius: 8px;
}

.right {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    color: #61707D;
}

.weight {
    letter-spacing: 0.16px;
    color: #61707D;
    opacity: 0.7;
    font-size: 12px;
    line-height: 16px;
}
</style>