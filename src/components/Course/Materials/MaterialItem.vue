<template>
    <li class="material-item" :class="{locked: data.locked}">
        <span class="head">
            <span class="icon-wrapper" :class="{empty: !data.icon}">
                <span class="icon">
                    <img v-if="data.icon" :src="require('@/assets/uploads/' + data.icon)">
                </span>
                <span class="duration-wrapper">
                    <span class="duration">
                        {{data.duration}}
                    </span>
                </span>
            </span>
            <span class="title">
                {{data.title}}
            </span>
        </span>
        <span class="body">
            {{data.desc}}
        </span>
        <span class="footer">
            <span class="completed" v-if="data.result">
                <span class="completed-text">
                    Ваш результат
                </span>
                <ul class="rating">
                    <li v-for="loopLevel in 3" :key="loopLevel">
                        <i class="star" :class="{burning: loopLevel <= data.result}">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M17.6093 8.19264C17.9636 7.84734 18.0887 7.34058 17.9358 6.86949C17.7827 6.39841 17.3837 6.06212 16.8935 5.99076L12.5351 5.35748C12.3495 5.33044 12.1891 5.21403 12.1062 5.0457L10.1577 1.0968C9.93893 0.653111 9.49488 0.37738 9 0.37738C8.50549 0.37738 8.06144 0.653111 7.84265 1.0968L5.8938 5.04606C5.8109 5.21439 5.65014 5.3308 5.46452 5.35784L1.10617 5.99112C0.616343 6.06212 0.216984 6.39877 0.0637999 6.86985C-0.0890235 7.34094 0.0360466 7.84771 0.390352 8.193L3.54378 11.2668C3.67822 11.398 3.73985 11.5868 3.70813 11.7714L2.9642 16.1117C2.89824 16.4938 2.99844 16.8654 3.2457 17.1584C3.62992 17.6151 4.30068 17.7542 4.83701 17.4723L8.73472 15.4229C8.89764 15.3375 9.10273 15.3382 9.26528 15.4229L13.1634 17.4723C13.3529 17.5722 13.5552 17.6226 13.7638 17.6226C14.1448 17.6226 14.506 17.4532 14.7543 17.1584C15.0019 16.8654 15.1018 16.493 15.0358 16.1117L14.2915 11.7714C14.2598 11.5865 14.3214 11.398 14.4559 11.2668L17.6093 8.19264Z" fill="#F2F4F5"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </i>
                    </li>
                </ul>
            </span>

            <span class="progress" v-if="data.progress">
                <span class="progress-text">
                    Прогресс урока
                </span>
                <span class="progress-percents">
                    {{data.progress}}%
                </span>
            </span>

            <span class="item-locked" v-if="data.locked">
                <span class="locked-icon">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6.27815V4.99999C11 2.24317 8.75681 0 5.99998 0C3.24316 0 0.999992 2.24317 0.999992 4.99999V6.27815C0.405093 6.62502 0 7.2629 0 8V14C0 15.103 0.896958 16 1.99998 16H9.99998C11.103 16 12 15.103 12 14V8C12 7.26287 11.5949 6.62499 11 6.27815ZM5.99998 1.99998C7.65428 1.99998 8.99999 3.34567 8.99999 4.99999V5.99998H2.99998V4.99999C2.99998 3.3457 4.34569 1.99998 5.99998 1.99998ZM6.99998 11.6107V13H4.99999V11.6107C4.69517 11.3362 4.5 10.9425 4.5 10.5C4.5 9.67155 5.17155 8.99999 5.99998 8.99999C6.82842 8.99999 7.49997 9.67155 7.49997 10.5C7.49997 10.9425 7.3048 11.3362 6.99998 11.6107Z" fill="#61707D"/>
                    </svg>
                </span>
                <span class="locked-text">
                    Завершите предыдущие материалы
                </span>
            </span>
        </span>
    </li>
</template>

<script>
    export default {
        name: "MaterialItem",
        props: {
            data: Object
        }
    }
</script>

<style scoped>
.material-item {
    background: rgba(239, 241, 242, 0.5);
    border-radius: 16px;
    margin-top: 16px;
    overflow: hidden;
}

.head {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 16px;
    display: flex;
}

.material-item.locked .head,  .material-item.locked .body {
    opacity: 0.5;
}

.icon-wrapper {
    width: 100px;
    min-width: 100px;
    height: 64px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
}

.duration-wrapper {
    position: absolute;
    min-width: 49px;
    right: 0;
    bottom: 0;
    height: 30px;
    background: #4B4B4B;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
}

.duration {
    color: #ffffff;
    letter-spacing: 0.16px;
    font-size: 12px;
    line-height: 16px;
}

.icon {
    width: 100px;
    min-width: 100px;
    height: 64px;
    display: block;
}

.icon-wrapper.empty .icon {
    background: #EAECEC;
    background-image: url(../../../assets/images/book.svg);
    background-size: 17px 22px;
    background-position: 22px 20px;
    background-repeat: no-repeat;
}

.icon-wrapper.empty .duration-wrapper {
    background: transparent;
}

.icon-wrapper.empty .duration {
    color: #4B4B4B
}

.icon img {
    width: 100%;
    height: auto;
}

.body {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 16px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.078px;
    color: #4B4B4B;
    white-space: initial;
    display: flex;
}

.footer {
    border-top: 1px solid #EFF1F2;
    min-height: 50px;
    display: block;
    width: 100%;
}

.title {
    letter-spacing: 0.16px;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #4B4B4B;
    margin-left: 12px;
}

.rating {
    display: flex;
}

.rating .star {
    width: 16px;
    height: 16px;
}

.rating .star svg {
    width: 100%;
    height: auto;
}

.rating .star.burning svg g path  {
    fill: #FFC542;
}

.rating li {
    margin-left: 6.4px;
}

.rating i {
    display: block;
}

.completed, .progress {
    padding-left: 16px;
    padding-right: 16px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-locked {
    padding-left: 16px;
    padding-right: 16px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.completed-text {
    letter-spacing: 0.16px;
    color: #4B4B4B;
    font-size: 14px;
    line-height: 16px;
}

.progress {
    background: linear-gradient(90deg, #3DD498 75%, transparent 75%);
}

.progress-text {
    color: #ffffff;
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
}

.progress-percents {
    letter-spacing: 0.16px;
    color: #4B4B4B;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
}

.locked-text {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    color: #4B4B4B;
    margin-left: 18px;
}

.locked-icon {
    display: flex;
    width: 16px;
    height: 16px;
    justify-content: center;
}

</style>