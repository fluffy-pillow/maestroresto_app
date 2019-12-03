<template>
    <li class="favorite-item" :class="data.type" @click="openFavoriteItemPage">
        <div class="container" :style="{
            background:
            (!data.background) ? 'none' : 'linear-gradient(rgba(60, 60, 59, 0.5), rgba(0, 60, 59, 0.5)),' +
    'url(' + require('@/assets/uploads/' + data.background) + ') no-repeat scroll 50% 0'
        }">
            <div class="name">
                {{data.name}}
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "FavoriteItem",
        props: {
            data: Object
        },
        methods: {
            openFavoriteItemPage () {
                switch (this.data.type) {
                    case 'mainMenu': {
                        this.$router.push(this.$route.path + '/mainmenu')
                        break
                    }
                    default: {
                        break
                    }
                }
            }
        }
    }
</script>

<style scoped>
.favorite-item {
    width: 104px;
    height: 104px;
    border: 1px solid transparent;
    border-radius: 20px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 104px;
}

.favorite-item:first-child {
    margin-left: 0;
}

.favorite-item.barMenu {
    border-color: #FF974A;
}

.favorite-item.mainMenu {
    border-color: #FFC542;
}

.favorite-item.barMenu .container {
    background-image: url("../../../../assets/images/bar-menu.svg") !important;
}

.favorite-item.mainMenu .container {
    background-image: url("../../../../assets/images/main-menu.svg") !important;
}

.container {
    width: 96px;
    height: 96px;
    display: flex;
    border-radius: 16px;
    overflow: hidden;
}

.name {
    color: #FFFFFF;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    align-self: flex-end;
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 7px;
    word-spacing: 60px;
}
</style>