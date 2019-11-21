<template>
    <section class="review-desc">
        <h4 class="title">{{title}}</h4>
        <p class="text" v-show="text">
            {{text}}
        </p>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "ReviewDesc",
        props: {
            title: String,
            text: String
        }
    }
</script>

<style scoped>
.review-desc {
    padding-top: 24px;
}


.title {
    text-transform: uppercase;
}

.text {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.078px;
    color: #4B4B4B;
    margin-top: 8px;
}
</style>