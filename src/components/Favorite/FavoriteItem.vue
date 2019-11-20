<template>
    <li class="favorite-item" :class="data.type" @click.prevent="openFavoriteItemPage">
        <span class="container"
              :style="{
            background:
            (!data.background) ? 'none' : 'linear-gradient(rgba(60, 60, 59, 0.5), rgba(0, 60, 59, 0.5)),' +
    'url(' + require('@/assets/uploads/' + data.background) + ') no-repeat scroll 50% 0'
        }">
            <span class="icon">
            </span>
            <span class="title">
                {{data.name}}
            </span>
            <span class="heart" @click.prevent="openConfirmDeletionWindow" v-if="data.type === 'other'">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="white"/>
                </svg>
            </span>
        </span>
    </li>
</template>

<script>
    import ConfirmDeletion from './ConfirmDeletion'

    export default {
        name: "FavoriteItem",
        props: {
            data: Object
        },
        methods: {
            openConfirmDeletionWindow () {
                this.$eventBus.$emit('open-action-sheet', ConfirmDeletion)
            },
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
    margin-top: 8px;
    min-height: 104px;
    padding: 4px;
    display: flex;
    border: 1px solid transparent;
    border-radius: 20px;
}

.container {
    width: 100%;
    background-size: cover !important;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 14px;
}

.favorite-item.barMenu {
    border-color: #FF974A;
}

.favorite-item.mainMenu {
    border-color: #FFC542;
}

.favorite-item.barMenu .container {
    background-color: #FF974A !important;
}

.favorite-item.mainMenu .container {
    background-color: #FFC542 !important;
}

.favorite-item .icon {
    width: 40px;
    min-width: 40px;
    height: 40px;
    display: flex;
    margin-right: 17px;
}

.favorite-item.barMenu .icon {
    background-image: url(../../assets/images/brandy.svg);
}

.favorite-item.mainMenu .icon {
    background-image: url(../../assets/images/food.svg);
}

.favorite-item.mainMenu .icon {
    background-color: #FFC542 !important;
}


.favorite-item.other .icon {
    display: none;
}

.title {
    color: #FFFFFF;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
}

.favorite-item.other .title {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}

.heart {
    margin-left: auto;
}
</style>