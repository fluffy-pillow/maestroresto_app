<template>
    <div class="audio-outer">
        <div class="audio-middle">
            <audio controls :src="audio" ref="audioRef" type="audio/wav">
           </audio>

            <div class="audio-inner">
                <button class="play" @click="play">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.63005 0.915887L2.63011 0.915921L12.0123 6.29648C12.5173 6.58606 12.6075 6.86638 12.6075 7.00007C12.6075 7.13377 12.5173 7.41412 12.0123 7.70378C12.0123 7.70379 12.0123 7.7038 12.0123 7.70381L2.63029 13.0843C2.12752 13.3724 1.83525 13.3114 1.71326 13.2407C1.59131 13.1701 1.39287 12.9468 1.39287 12.3666V1.63238C1.39287 1.05316 1.59117 0.829953 1.71318 0.759268C1.83516 0.688607 2.12741 0.627566 2.63005 0.915887Z" stroke="#61707D" stroke-width="1.4"/>
                    </svg>
                </button>
                <div class="audio-name">
                    {{audioName}}
                </div>
                <div class="duration">
                    1:56
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Audio",
        data () {
            return {
                bRun: false
            }
        },
        props: {
            audio: String,
            audioName: String
        },
        methods: {
            play () {
                this.$refs.audioRef.play()
            }
        }
    }
</script>

<style scoped>
.audio-inner {
    width: 100%;
    height: 64px;
    background: rgba(239, 241, 242, 0.5);
    border-radius: 16px;
    display: flex;
    align-items: center;
}

.audio-middle {
    display: flex;
}

.audio-inner {
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    width: 100%;
    align-items: center;
}

audio {
    display: none;
}

.play {
    background: rgba(97,112,125, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
}

.audio-name {
    letter-spacing: 0.16px;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    margin-left: 16px;
}

.duration {
    letter-spacing: -0.078px;
    color: #898A8D;
    font-size: 14px;
    line-height: 22px;
    margin-left: auto;
}
</style>