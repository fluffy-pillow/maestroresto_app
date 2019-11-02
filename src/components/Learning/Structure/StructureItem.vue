<template>
    <li class="structure-item" :style="{background: bg}"
        @click="redir('Course', {
                animation: 'slide',
                animationOptions: {duration: 0.5},
            },
            true,
            false
        )"
    >
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
                <ul class="rating">
                    <li v-for="loopResult in 3" :key="loopResult">
                        <i class="star" :class="{burning: 3 <= data.result}">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.78294 4.55153C9.97977 4.3597 10.0493 4.07816 9.96436 3.81645C9.87925 3.55473 9.65759 3.36791 9.38526 3.32826L6.96396 2.97644C6.86083 2.96142 6.77172 2.89674 6.72567 2.80323L5.64317 0.609396C5.52162 0.362901 5.27493 0.209717 5 0.209717C4.72527 0.209717 4.47857 0.362901 4.35703 0.609396L3.27433 2.80343C3.22827 2.89694 3.13897 2.96162 3.03584 2.97664L0.614536 3.32846C0.342409 3.36791 0.120543 3.55493 0.035441 3.81665C-0.0494609 4.07836 0.0200225 4.3599 0.216859 4.55173L1.96876 6.25938C2.04345 6.33226 2.07769 6.43719 2.06007 6.53971L1.64677 8.95101C1.61013 9.16326 1.6658 9.36971 1.80316 9.53251C2.01662 9.78621 2.38927 9.8635 2.68722 9.70691L4.85262 8.56835C4.94313 8.52089 5.05707 8.52129 5.14738 8.56835L7.31297 9.70691C7.4183 9.76238 7.53064 9.79041 7.64657 9.79041C7.85823 9.79041 8.05887 9.6963 8.19683 9.53251C8.3344 9.36971 8.38987 9.16286 8.35322 8.95101L7.93973 6.53971C7.92211 6.43699 7.95635 6.33226 8.03104 6.25938L9.78294 4.55153Z" fill="#FFC542"/>
                            </svg>
                        </i>
                    </li>
                </ul>
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
    export default {
        name: "StructureItem",
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
.structure-item {
    height: 100px;
    background-size: cover !important;
    border-radius: 16px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-right: 16px;
    padding-left: 16px;
}

.structure-item:first-child {
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