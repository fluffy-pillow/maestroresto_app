<template>
    <li class="certifications-item" :style="{background: bg}">
        <span class="left">
            <span class="title">
                {{data.title}}
            </span>
            <span class="scheduled-outer" v-if="data.scheduled">
                <span class="scheduled-inner">
                    Назначено на: {{data.scheduled}}
                </span>
            </span>
            <span class="available" v-if="data.available">
                Доступно: {{data.available}}
            </span>
        </span>
        <span class="right" v-if="data.duration">
            <span class="duration-wrapper">
                <span class="duration-icon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9916 1C17.5787 1 20.8265 2.45864 23.1841 4.80683C25.5323 7.16508 26.9909 10.4129 26.9909 14C26.9909 17.5871 25.5323 20.8349 23.1841 23.1932C20.8259 25.5414 17.5787 27 13.9916 27C10.4045 27 7.15729 25.5414 4.80911 23.1932C2.45085 20.8349 1.00165 17.5877 1.00165 14C1.00165 10.4129 2.45022 7.16508 4.80848 4.80683C7.15729 2.45864 10.4045 1 13.9916 1ZM20.6169 13.2905C21.0065 13.2905 21.3163 13.6103 21.3163 14C21.3163 14.3897 21.0065 14.7095 20.6169 14.7095H14.0117H13.9916C13.7316 14.7095 13.5018 14.5597 13.3822 14.35L13.3721 14.34L13.362 14.3198V14.3097L13.352 14.2896L13.3419 14.2694V14.2594L13.3318 14.2392L13.3217 14.2292V14.209L13.3117 14.1889V14.1788L13.3016 14.1586V14.1385V14.1284V14.1184L13.2915 14.1083V14.0881V14.068V14.0504V14.0403V14.0201V14V5.53646C13.2915 5.14678 13.6013 4.83705 13.9909 4.83705C14.3806 4.83705 14.7004 5.14678 14.7004 5.53646V13.2905H20.6169ZM22.185 5.80654C20.0868 3.70828 17.189 2.41898 13.9916 2.41898C10.7941 2.41898 7.89637 3.70765 5.79811 5.80654C3.70993 7.90479 2.41056 10.8026 2.41056 14C2.41056 17.1974 3.7093 20.0952 5.79811 22.1941C7.89637 24.2923 10.7941 25.5816 13.9916 25.5816C17.189 25.5816 20.0868 24.2923 22.185 22.1941C24.2833 20.0958 25.5827 17.1981 25.5827 14C25.5827 10.8026 24.2839 7.90479 22.185 5.80654Z" fill="white" stroke="white" stroke-width="0.3"/>
                    </svg>
                </span>
                <span class="duration-text">
                    {{data.duration}} минут
                </span>
            </span>
        </span>
    </li>
</template>

<script>
    export default {
        name: "CertificationsItem",
        props: {
            data: Object
        },
        computed: {
            bg () {
                if (!this.data.background) {
                    return '#415393'
                } else {
                    let image = this.data.background
                    return 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),' +
                        'url(' + image + ') no-repeat scroll 50% 50%'
                }
            }

        }

    }
</script>

<style scoped>
.certifications-item {
    height: 114px;
    background-size: cover !important;
    border-radius: 16px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-right: 16px;
    padding-left: 16px;
}

.certifications-item:first-child {
    margin-top: 0;
}

.title {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.16px;
    color: #FFFFFF;
}

.scheduled-outer {
    margin-top: 16px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    background: #FC5A5A;
    border-radius: 18px;
    width: max-content;
}

.scheduled-inner {
    letter-spacing: 0.16px;
    color: #FFFFFF;
    font-size: 12px;
    line-height: 16px;
}

.left {
    width: 228px;
}

.duration-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 25px;
}

.duration-icon {
    display: flex;
    width: 26px;
    height: 26px;
}

.duration-text {
    letter-spacing: 0.16px;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 8px;
    text-align: center;
}

.available {
    letter-spacing: 0.16px;
    font-size: 12px;
    line-height: 16px;
    margin-top: 16px;
    color: #FFFFFF;
    display: block;
}
</style>