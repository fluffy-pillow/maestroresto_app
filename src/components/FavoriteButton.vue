<template>
    <button class="favorite-button"
            @click="handleClick"
            :class="{selected: bSelected}"
            :style="{
                backgroundImage: 'url(' + require('@/assets/images/favorite-button-' + color + '.svg') + ')'
            }"
    >

    </button>
</template>

<script>
    export default {
        name: "FavoriteButton",
        data () {
            return {
                bSelected: false
            }
        },
        props: {
            color: {
                type: String,
                default: 'black'
            }
        },
        methods: {
            handleClick () {

                this.bSelected = !this.bSelected
            }
        }
    }
</script>

<style scoped>
.favorite-button {
    width: 24px;
    height: 24px;
    display: block;
    background-image: url(../assets/images/favorite-button-black.svg);
}

.favorite-button.white {
    background-image: url(../assets/images/favorite-button-white.svg);
}

.favorite-button.selected {
    background-image: url(../assets/images/favorite-button-selected.svg) !important;
}
</style>