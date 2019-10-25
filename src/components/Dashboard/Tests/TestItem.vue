<template>
    <li class="test-item"
        :class="getClass"
    >
        <div class="container">
            <div class="head">
                {{data.name}}
            </div>
            <div class="body">
                <div class="progess-bar-wrapper">
                    <ul class="progress-bar">
                        <li class="step" v-for="step in 4" :key="step">
                            <div class="progress" :style="{width: 0 + '%'}">

                            </div>
                        </li>
                    </ul>
                    <div class="percents">
                        {{percents}}%
                    </div>
                </div>
                <div class="text">
                    {{data.answered}} из {{data.total}} вопросов
                </div>
            </div>
        </div>
        <div class="sticker">
            <div class="arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.906563 6.75H9.28406L5.62406 10.41C5.33156 10.7025 5.33156 11.1825 5.62406 11.475C5.91656 11.7675 6.38906 11.7675 6.68156 11.475L11.6241 6.5325C11.9166 6.24 11.9166 5.7675 11.6241 5.475L6.68906 0.524998C6.54894 0.384558 6.3587 0.305634 6.16031 0.305634C5.96192 0.305634 5.77169 0.384558 5.63156 0.524998C5.33906 0.817498 5.33906 1.29 5.63156 1.5825L9.28406 5.25H0.906563C0.494063 5.25 0.156563 5.5875 0.156563 6C0.156563 6.4125 0.494063 6.75 0.906563 6.75Z" fill="white"/>
                </svg>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "TestItem",
        props: {
            data: Object
        },
        computed: {
            percents () {
                return Math.floor((100/this.data.total) * this.data.answered)
            },
            getClass () {
                return (this.percents > 50) ? 'green' : 'dark'
            }
        }
    }
</script>

<style scoped>
.test-item {
    width: 200px;
    height: 180px;
    margin-left: 10px;
    border-radius: 30px;
    min-width: 200px;
    position: relative;
    overflow: hidden;
}

.sticker {
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    border-top-left-radius: 20px;
}

.arrow {
    display: flex;
}

.test-item.green {
    background: linear-gradient(122.93deg, #3DD498 1.61%, #5DAE8E 103.16%);
    box-shadow: 0px 0px 20px rgba(61, 212, 152, 0.35);
}

.test-item.dark {
    background: #61707D;
}

.container {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
}

.test-item:first-child {
    margin-left: 0;
}

.head {
    margin-top: 20px;
    letter-spacing: 0.16px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 16px;
}

.percents {
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-left: 7px;
}

.progess-bar-wrapper {
    display: flex;
    align-items: center;
}

.progress-bar {
    display: flex;
    border-radius: 3px;
    flex: 1;
    overflow: hidden;
}

.step {
    background: rgba(255, 255, 255, 0.4);
    width: 25%;
    margin-left: 3px;
    height: 6px;
    position: relative;
}

.progress {
    position: absolute;
    height: 6px;
    background: #FFFFFF;
}

.step:first-child {
    margin-left: 0;
}

.text {
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: 12px;
    margin-bottom: 34px;
}
</style>