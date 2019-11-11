<template>
    <div class="question">
        <div class="text">
            {{question}}
        </div>

        <Video v-if="video" :video="video"></Video>
    </div>
</template>

<script>
    import Video from "../Video";
    export default {
        name: "Question",
        components: {Video},
        props: {
            question: String,
            video: String
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
</style>