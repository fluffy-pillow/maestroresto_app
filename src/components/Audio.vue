<template>
    <div class="audio-outer" :class="styleVariant">
        <div class="audio-middle">
            <audio controls :src="audio" ref="audioRef" type="audio/wav">
           </audio>

            <div class="audio-inner">
                <button v-if="bRun" class="play" @click="pause">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 0.5H2.25C1.42157 0.5 0.75 1.17157 0.75 2V14C0.75 14.8284 1.42157 15.5 2.25 15.5H3.75C4.57843 15.5 5.25 14.8284 5.25 14V2C5.25 1.17157 4.57843 0.5 3.75 0.5ZM9.75 0.5H8.25C7.42157 0.5 6.75 1.17157 6.75 2V14C6.75 14.8284 7.42157 15.5 8.25 15.5H9.75C10.5784 15.5 11.25 14.8284 11.25 14V2C11.25 1.17157 10.5784 0.5 9.75 0.5ZM2.25 2V14H3.75V2H2.25ZM8.25 14V2H9.75V14H8.25Z" fill="#61707D"/>
                    </svg>
                </button>
                <button v-else class="play" @click="play">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.63005 0.915887L2.63011 0.915921L12.0123 6.29648C12.5173 6.58606 12.6075 6.86638 12.6075 7.00007C12.6075 7.13377 12.5173 7.41412 12.0123 7.70378C12.0123 7.70379 12.0123 7.7038 12.0123 7.70381L2.63029 13.0843C2.12752 13.3724 1.83525 13.3114 1.71326 13.2407C1.59131 13.1701 1.39287 12.9468 1.39287 12.3666V1.63238C1.39287 1.05316 1.59117 0.829953 1.71318 0.759268C1.83516 0.688607 2.12741 0.627566 2.63005 0.915887Z" stroke="#61707D" stroke-width="1.4"/>
                    </svg>
                </button>
                <div class="audio-info">
                    <div class="audio-name">
                        {{audioName}}
                    </div>
                    <div class="track" @click="rewind" v-if="currentTime > 0">
                        <div class="current-time-track" :style="{width: currentTimePercent + '%'}">

                        </div>
                    </div>
                </div>
                <div class="time">
                    {{audioTime}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatTime} from '@/helpers'

    export default {
        name: "Audio",
        data () {
            return {
                bRun: false,
                duration: 0,
                currentTime: 0
            }
        },
        props: {
            audio: String,
            audioName: String,
            styleVariant: {
                type: String,
                default: ''
            }
        },
        methods: {
            play () {
                this.bRun = true
                this.$refs.audioRef.play()
            },
            rewind (e) {
                this.$refs.audioRef.pause()
                let rect = e.target.getBoundingClientRect()
                let x = (100/rect.width) * (e.clientX - rect.left)
                this.$refs.audioRef.currentTime = (x * this.duration) / 100
                if (this.bRun) this.$refs.audioRef.play()
            },
            pause () {
                this.bRun = false
                this.$refs.audioRef.pause()
            },
            setDuration(e) {
                this.duration = e.target.duration
            },
            setCurrentTime (e) {
                this.currentTime = e.target.currentTime
            }
        },
        computed: {
            audioTime () {
                let ret
                if (this.currentTime !== 0) {
                    ret = formatTime(this.currentTime.toFixed(0)) + '/' + formatTime(this.duration.toFixed(0))
                } else {
                    ret = formatTime(this.duration.toFixed(0))
                }
                return ret
            },
            currentTimePercent () {
                return Math.floor((100/this.duration) * this.currentTime)
            }
        },
        mounted () {
            this.$refs.audioRef.addEventListener('loadedmetadata', this.setDuration)
            this.$refs.audioRef.addEventListener('timeupdate', this.setCurrentTime)
        },
        beforeDestroy () {
            this.$refs.audioRef.removeEventListener('loadedmetadata', this.setDuration)
            this.$refs.audioRef.removeEventListener('timeupdate', this.setCurrentTime)
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


.audio-outer.dark-bg .audio-name {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.16px;
    color: #FFFFFF;
}

.audio-outer.dark-bg .audio-inner {
    background: transparent;
    height: 48px
}

.audio-outer.light-bg .audio-inner {
    height: 48px
}

.audio-outer.dark-bg .play svg path {
    stroke: #ffffff;
    fill: #ffffff;
}

.audio-outer.dark-bg .time {
    color: #ffffff;
}

.audio-outer.dark-bg .current-time-track:after {
    background-color: #ffffff;
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

.track {
    height: 2px;
    width: 100%;
    background: #E8EAEC;
    margin-top: 10px;
}

.current-time-track {
    height: 2px;
    background: #61707D;
    position: relative;
}

.current-time-track:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: #61707D;
    width: 8px;
    height: 8px;
    right: 0;
    transform: translateY(-35%);
}

.audio-info {
    margin-left: 16px;
    margin-right: 22px;
    flex: 1;
    min-width: 100px;
}

.audio-name {
    letter-spacing: 0.16px;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
}

.time {
    letter-spacing: -0.078px;
    color: #898A8D;
    font-size: 14px;
    line-height: 22px;
    margin-left: auto;
}
</style>