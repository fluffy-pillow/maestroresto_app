<template>
    <div class="video-outer">
        <div class="video-middle">
            <div class="video-inner">
                <video width="100%" height="100%" controls="controls" playsinline :src="video" type="video/mp4">
                </video>
            </div>
            <div class="video-name" v-if="videoName">
                {{videoName}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video",
        props: {
            video: String,
            videoName: String
        }
    }
</script>

<style scoped>
.video-inner video {
   width: 100%;
   border-radius: 16px;
   overflow: hidden;
}

.video-inner {
    position: relative;
}

.video-middle {
    background: rgba(239, 241, 242, 0.5);
    border-radius: 16px;
}

.controls {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.play {
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;
    background: rgba(97,112,125, 0.2);
    border-radius: 50%;
    overflow: hidden;
}

.play svg {
    margin-left: 17px;
}

.video-name {
    color: #4B4B4B;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    padding: 16px;

}
</style>