<template>
    <li class="material-item" :class="{locked: data.locked}" @click="openMaterial">
        <span class="head">
            <span class="icon-wrapper" :class="{empty: !data.icon}">
                <span class="icon" v-if="data.icon">
                </span>
                <span v-else class="icon" :class="{empty: data.icon}">

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
                 <Stars class="stars" :offset="6.4" :size="16" :level="data.result"></Stars>
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
    import Stars from "../../Stars";
    export default {
        name: "MaterialItem",
        components: {Stars},
        props: {
            data: Object
        },
        methods: {
            openMaterial () {
                if (!this.data.locked) {
                    this.$router.push(this.$route.path + '/material')
                }
            }
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
    background-size: cover;
    background-image: url(../../../assets/uploads/material.jpeg);
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