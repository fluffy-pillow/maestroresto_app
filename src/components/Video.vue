<template>
    <div class="video-outer">
        <div class="video-middle">
            <div class="video-inner">
                <video width="auto" ref="videoRef">
                    <source :src="video"  type="video/webm">
                </video>
                <div class="controls" ref="playButtonRef" @click="toggle">
                    <button class="play" :style="{display: (!bRun) ? 'flex' : 'none'}">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.25471 0.440985C2.45159 -0.593307 0.989746 0.253997 0.989746 2.33198V17.6666C0.989746 19.7466 2.45159 20.5928 4.25471 19.5595L17.6579 11.8729C19.4616 10.8382 19.4616 9.16191 17.6579 8.1275L4.25471 0.440985Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="video-name">
                {{videoName}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video",
        data () {
            return {
                bRun: false
            }
        },
        props: {
            video: String,
            videoName: String
        },
        methods: {
            toggle () {
                if (!this.bRun) {
                    this.$refs.videoRef.play()
                    this.bRun = true
                } else {
                    this.$refs.videoRef.pause()
                    this.bRun = false
                }
            }
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
    margin-left: 17px;
    width: 48px;
    height: 48px;
    background: rgba(97,112,125, 0.2);
    border-radius: 50%;
    overflow: hidden;
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