<template>
    <div class="question" :class="$parent.color">
        <div class="text">
            {{question}}
        </div>

        <Video v-if="video" :video="video"></Video>

        <div class="picture" v-if="picture">
            <img :src="picture">
        </div>
    </div>
</template>

<script>
    import Video from "../Video";
    export default {
        name: "Question",
        components: {Video},
        props: {
            question: String,
            video: String,
            picture: String
        }
    }
</script>

<style scoped>
    .question {
        padding-top: 16px;
        padding-bottom: 32px;
        background: #3DD498;
        padding-left: 16px;
        padding-right: 16px;
    }

    .question.dark-purple {
        background: #415393;
    }

    .text {
        color: #FFFFFF;
        letter-spacing: 0.16px;
        font-weight: 300;
        font-size: 24px;
        line-height: 30px;
        font-feature-settings: 'case' on;
        white-space: initial;
        text-align: left;
        padding-right: 16px;
    }

    .video-outer {
        margin-top: 32px;
    }

    .video-middle {
        background: none;
    }

    .picture {
        width: 100%;
        height: auto;
        margin-top: 25px;
        border-radius: 16px;
        overflow: hidden;
    }

    .picture img {
        width: 100%;
        height: auto;
    }
</style>