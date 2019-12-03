<template>
    <section class="review-info">
        <ReviewInfoList>
            <ReviewInfoItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
            >
            </ReviewInfoItem>
        </ReviewInfoList>
    </section>
</template>

<script>
    import ReviewInfoList from "./ReviewInfoList";
    import ReviewInfoItem from "./ReviewInfoItem";
    export default {
        name: "ReviewInfo",
        components: {ReviewInfoItem, ReviewInfoList},
        props: {
            items: Array
        }
    }
</script>

<style scoped>

</style>