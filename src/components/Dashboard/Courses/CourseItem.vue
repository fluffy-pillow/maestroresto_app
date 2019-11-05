<template>
    <li class="course-item" :style="{background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
    'url(' + require('@/assets/uploads/' + data.background) + ') no-repeat scroll 50% 0'}"
        @click="$router.push('/dashboard/course')"
    >
        <div class="container">
            <div class="head">
                <svg class="chart--svg" width="100%" height="100%" viewBox="0 0 34 34">
                    <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" opacity="0.1"></circle>

                    <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" :stroke-dasharray="data.percents + ' ' +  (100 - data.percents)" stroke-dashoffset="25"></circle>
                </svg>
                <div class="chart--text">
                    {{data.percents}}%
                </div>
            </div>
            <div class="body">
                {{data.name}}
            </div>
            <div class="footer">
                <div class="next--text">
                    Продолжить
                </div>
                <div class="next--arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.906563 6.75H9.28406L5.62406 10.41C5.33156 10.7025 5.33156 11.1825 5.62406 11.475C5.91656 11.7675 6.38906 11.7675 6.68156 11.475L11.6241 6.5325C11.9166 6.24 11.9166 5.7675 11.6241 5.475L6.68906 0.524998C6.54894 0.384558 6.3587 0.305634 6.16031 0.305634C5.96192 0.305634 5.77169 0.384558 5.63156 0.524998C5.33906 0.817498 5.33906 1.29 5.63156 1.5825L9.28406 5.25H0.906563C0.494063 5.25 0.156563 5.5875 0.156563 6C0.156563 6.4125 0.494063 6.75 0.906563 6.75Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "CourseItem",
        props: {
            data: Object
        }
    }
</script>

<style scoped>
.course-item {
    width: 200px;
    min-width: 200px;
    height: 200px;
    border-radius: 30px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
    margin-left: 10px;
}

.course-item:first-child {
    margin-left: 0;
}

.container {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
}

.head {
    width: 44px;
    height: 44px;
    position: relative;
    margin-left: auto;
    margin-top: 20px;
}

.chart--text {
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

.body {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.next--text {
    letter-spacing: 0.16px;
    text-transform: uppercase;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
}

.next--arrow {
    display: flex;
}
</style>