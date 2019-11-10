<template>
    <div class="question">
        <div class="text">
            Как правильно раскладывать приборы?
        </div>
    </div>
</template>

<script>
    export default {
        name: "Question"
    }
</script>

<style scoped>
    .question {
        padding-top: 16px;
        padding-bottom: 32px;
        background: #3DD498;
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
        padding-left: 16px;
    }
</style>