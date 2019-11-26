<template>
    <ul class="stars">
        <li v-for="loopLevel in 3" :key="loopLevel" :style="{marginLeft: offset + 'px'}">
            <i class="star" :class="{burning: loopLevel <= level}" :style="{width: size + 'px', height: size + 'px'}">
            </i>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Stars",
        props: {
            level: Number,
            size: Number,
            offset: Number
        }
    }
</script>

<style scoped>
    .stars .star {
        background-image: url(../assets/images/star.svg);
        background-size: cover;
    }

    .stars li:first-child {
        margin-left: 0px !important;
    }

    .stars .star.burning  {
        background-image: url(../assets/images/burning-star.svg);
    }

    .stars {
        display: flex;
    }

    .stars i {
        display: block;
    }

</style>