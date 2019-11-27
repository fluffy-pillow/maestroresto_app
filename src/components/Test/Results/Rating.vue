<template>
    <div class="rating">
        <Stars class="stars" :offset="6.4" :size="22" :level="2.5"></Stars>
        <div class="rating-details">
            Результат 2.5 из 3
        </div>
    </div>
</template>

<script>
    import Stars from "../../Stars";
    export default {
        name: "Rating",
        components: {Stars}
    }
</script>

<style scoped>
    .rating {
        margin-top: 32px;
    }

    .stars {
        margin-top: 16px;
        justify-content: center;
    }

    .rating-details {
        margin-top: 16px;
        text-align: center;
        letter-spacing: 0.04px;
        color: #000000;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
    }

</style>