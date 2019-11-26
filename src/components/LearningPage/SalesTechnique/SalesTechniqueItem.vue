<template>
    <li class="sales-technique-item" :style="{background: bg}">
        <div class="pic" v-if="data.image && this.data.progress === 100">
            <img :src="require(`@/assets/uploads/${this.data.image}`)">
        </div>
        <div class="info">
            <div class="info-top">
                {{data.name}}
            </div>
            <div class="info-bottom"
                 :style="{
                    opacity: (this.data.progress < 100 && this.data.progress > 0) ? 1 : 0.7
                 }">
                <div class="info-bottom-left">
                    {{data.exercises}} занятий
                </div>
                <div class="info-bottom-center">

                </div>
                <div class="info-bottom-right">
                    {{data.time}} минут
                </div>
            </div>
        </div>
        <div class="other">
            <div class="arrow" v-if="data.percents === 0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.906555 6.75003H9.28406L5.62405 10.41C5.33156 10.7025 5.33156 11.1825 5.62405 11.475C5.91655 11.7675 6.38906 11.7675 6.68155 11.475L11.6241 6.53253C11.9166 6.24003 11.9166 5.76753 11.6241 5.47503L6.68906 0.525028C6.54893 0.384589 6.35869 0.305664 6.16031 0.305664C5.96192 0.305664 5.77168 0.384589 5.63156 0.525028C5.33906 0.817528 5.33906 1.29003 5.63156 1.58253L9.28406 5.25003H0.906555C0.494055 5.25003 0.156555 5.58753 0.156555 6.00003C0.156555 6.41253 0.494055 6.75003 0.906555 6.75003Z" fill="white"/>
                </svg>
            </div>
            <div class="result" v-else-if="data.percents === 100">
                <Stars class="stars" :offset="4" :size="10" :level="data.result"></Stars>
                <div class="result-text">
                    Результат
                </div>
            </div>
            <div class="chart" v-else>
                <svg class="chart-svg" width="100%" height="100%" viewBox="0 0 34 34">
                    <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" opacity="0.1"></circle>

                    <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" :stroke-dasharray="data.percents + ' ' +  (100 - data.percents)" stroke-dashoffset="25"></circle>
                </svg>
                <div class="chart-text">
                    {{data.percents}}%
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    import Stars from "../../Stars";
    export default {
        name: "SalesTechniqueItem",
        components: {Stars},
        props: {
            data: Object
        },
        computed: {
            bg () {
                if (this.data.percents === 0) {
                    return '#EF8564'
                } else if (this.data.percents === 100) {
                    return '#4B8595'
                } else {
                    let image = require(`@/assets/uploads/${this.data.image}`)
                    return 'linear-gradient(rgba(75, 75, 75, 0.6), rgba(75, 75, 75, 0.6)),' +
                    'url(' + image + ') no-repeat scroll 50% 50%'
                }
            }
        }
    }
</script>

<style scoped>
.sales-technique-item {
    height: 100px;
    background-size: cover !important;
    border-radius: 16px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-right: 16px;
    padding-left: 16px;
}

.sales-technique-item:first-child {
    margin-top: 0;
}

.pic {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 16px;
    margin-right: 16px;
}

.pic img {
    width: auto;
    height: 100%;
    margin-left: -25%;
}

.info {
    width: 180px;
}

.info-top {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    font-weight: 400;
}

.info-bottom {
    display: flex;
    align-items: center;
    margin-top: 4px;
}

.info-bottom-center {
    width: 4px;
    height: 4px;
    margin-left: 11px;
    margin-right: 11px;
    background: #FFFFFF;
    border-radius: 50%;
}

.info-bottom-left {
    letter-spacing: 0.16px;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
}

.info-bottom-right {
    letter-spacing: 0.16px;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
}

.other {
    margin-left: auto;
}

.arrow {
    margin-right: 7px;
}

.result {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.rating {
    display: flex;
}

.rating li {
    margin-left: 4px;
}

.rating li:first-child {
    margin-left: 0;
}

.result-text {
    letter-spacing: 0.16px;
    text-transform: uppercase;
    color: #FFFFFF;
    font-size: 8px;
    line-height: 16px;
    font-weight: 400;
}

.chart {
    width: 44px;
    height: 44px;
    position: relative;
}

.chart-text {
    position: absolute;
    letter-spacing: 0.16px;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
}
</style>