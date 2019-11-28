<template>
    <li class="swipeout-item"
        v-touch:moving="movingHandler"
        v-touch:start="startHandler"
        v-touch:end="endHandler"
        ref="swipeoutItem"
    >
        <span class="content-wrapper" :style="{
            width: 'calc((100% - 89px) - ' + deltaSumX + 'px)',
            background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.2)'
        }">
            <span class="slot-container"
                  :style="{
                    minWidth: 'calc(100% + ' + deltaSumX + 'px)'
                  }"
            >
                <slot></slot>
            </span>
            <span class="delete-button-wrapper">
                <button class="delete-button">
                    Удалить
                </button>
            </span>
        </span>
    </li>
</template>

<script>
    export default {
        name: "SwipeOutItem",
        data () {
            return {
                oldPositionX: 0,
                deltaSumX: 0,
                maxPositionX: -89,
                deltaX: 0,
                defaultRGB: {r: 223, g: 236, b: 243},
                newRGB: {r: 252, g: 90, b: 90},
                rgb: {}
            }
        },
        methods: {
            movingHandler (e) {
                let newPositionX = e.touches[0].pageX
                this.deltaX = this.oldPositionX - newPositionX
                this.deltaSumX -= this.deltaX
                if (this.deltaSumX > 0) {
                    this.deltaSumX = 0
                }
                if (this.deltaSumX < this.maxPositionX) {
                    this.deltaSumX = this.maxPositionX
                }
                this.oldPositionX = newPositionX
            },
            endHandler (e) {
                let offset = this.maxPositionX/2
                if (this.deltaSumX > offset) {
                    this.$emit('opened', {status: false, target: this.$refs.swipeoutItem})
                    this.deltaSumX = 0
                } else {
                    this.$emit('opened', {status: true, target: this.$refs.swipeoutItem})
                    this.deltaSumX = -89
                }
            },
            startHandler (e) {
                this.oldPositionX = e.touches[0].pageX;
            }
        },
        watch: {
            deltaSumX: function (newValue) {
                let percent = (100/this.maxPositionX) * newValue
                this.rgb = {
                    r: this.defaultRGB.r + ((percent * (this.newRGB.r - this.defaultRGB.r)) / 100),
                    g: this.defaultRGB.g + ((percent * (this.newRGB.g - this.defaultRGB.g)) / 100),
                    b: this.defaultRGB.b + ((percent * (this.newRGB.b - this.defaultRGB.b)) / 100),
                }
            }
        },
        mounted () {
            this.rgb = this.defaultRGB
        }
    }
</script>

<style scoped>
    .swipeout-item {
        margin-top: 8px;
        margin-left: calc(-89px + 16px);
        margin-right: 16px;
        overflow: hidden;

    }


    .content-wrapper {
        height: 100%;
        display: flex;
        margin-left: auto;
        width: calc(100% - 89px);
        background: rgba(223,236,243, 1);
        border-radius: 16px;
        transition: all 0.1s ease-in-out;
    }

    .slot-container {
        transition: all 0.1s ease-in-out;
        min-width: 100%;
    }

    .delete-button-wrapper {
        min-width: 89px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
    }

    .delete-button {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.163333px;
        color: #FC5A5A;
    }
</style>