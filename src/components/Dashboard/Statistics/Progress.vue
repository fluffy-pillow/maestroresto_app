<template>
    <div class="progress">
        <div class="progress-container">
            <div class="chart">
                <svg class="chart--svg" width="100%" height="100%" viewBox="0 0 34 34">
                    <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" opacity="0.1"></circle>

                    <circle cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#FFFFFF" stroke-width="2" :stroke-dasharray="percent + ' ' +  (100 - percent)" stroke-dashoffset="25"></circle>
                </svg>

                <svg class="giftbox--svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M18.6957 3.89557H17.2398C17.4319 3.59166 17.5586 3.25053 17.5947 2.88975C17.7102 1.73674 17.1029 0.703144 16.0691 0.244902C15.1189 -0.176309 14.0511 -0.00412126 13.2821 0.693301L11.4438 2.35932C11.0858 1.96775 10.5712 1.72166 10 1.72166C9.42781 1.72166 8.91234 1.96854 8.55426 2.36131L6.71363 0.693105C5.94344 -0.00431654 4.87602 -0.17584 3.92621 0.245137C2.8927 0.703418 2.28535 1.73736 2.40113 2.89033C2.43734 3.25084 2.56398 3.59182 2.75598 3.89557H1.30434C0.583945 3.89557 0 4.47955 0 5.1999V7.15643C0 7.51658 0.291992 7.80861 0.652187 7.80861H19.3479C19.708 7.80861 20 7.51662 20 7.15643V5.1999C20 4.47955 19.4161 3.89557 18.6957 3.89557ZM8.04348 3.67818V3.89557H4.97539C4.16477 3.89557 3.5268 3.13986 3.72926 2.29588C3.81844 1.9242 4.08672 1.60736 4.43371 1.44697C4.9102 1.22674 5.43801 1.29744 5.8382 1.65967L8.04402 3.65896C8.04391 3.66541 8.04348 3.67174 8.04348 3.67818ZM16.3005 2.71658C16.252 3.39443 15.6396 3.89564 14.9601 3.89564H11.9565V3.67826C11.9565 3.67057 11.9561 3.66295 11.956 3.65525C12.4557 3.20228 13.5397 2.21978 14.1276 1.68686C14.4618 1.384 14.9293 1.24264 15.3615 1.37154C15.9817 1.55654 16.3459 2.08396 16.3005 2.71658Z" fill="white"/>
                        <path d="M1.30434 9.11292V18.6781C1.30434 19.3985 1.88829 19.9825 2.60868 19.9825H8.69563V9.11292H1.30434Z" fill="white"/>
                        <path d="M11.3043 9.11292V19.9825H17.3913C18.1117 19.9825 18.6956 19.3985 18.6956 18.6781V9.11292H11.3043Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div class="info">
                <div class="percents">
                    {{percent}}%
                </div>
                <div class="text">
                    Осталось
                    до подарка
                </div>
            </div>
        </div>
        <div class="tooltip">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0.333344C3.32 0.333344 0.333328 3.32001 0.333328 7.00001C0.333328 10.68 3.32 13.6667 7 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00001C13.6667 3.32001 10.68 0.333344 7 0.333344ZM7.66666 11.6667H6.33333V10.3333H7.66666V11.6667ZM8.44666 7.11335L9.04666 6.50001C9.72666 5.82001 9.95999 4.65334 9.17333 3.56668C8.57333 2.73334 7.60666 2.20668 6.59333 2.36668C5.55999 2.52668 4.72666 3.27334 4.43999 4.25334C4.33333 4.62668 4.59999 5.00001 4.98666 5.00001H5.18666C5.44666 5.00001 5.65333 4.81334 5.73333 4.56668C5.95333 3.93334 6.63999 3.51334 7.37999 3.72001C7.84666 3.85334 8.21999 4.26001 8.30666 4.74001C8.39333 5.20668 8.24666 5.64668 7.93999 5.94001L7.11333 6.78001C6.83333 7.06001 6.61333 7.40668 6.47999 7.79334C6.38666 8.06668 6.33333 8.36001 6.33333 8.66668V9.00001H7.66666C7.66666 8.69335 7.69999 8.45335 7.75333 8.24001C7.87333 7.76001 8.11333 7.45334 8.44666 7.11335Z" fill="white"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        props: {
            percent: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
.progress {
    flex: 1;
    margin-left: 10px;
    background: #0062FF;
    box-shadow: 0px 10px 40px rgba(0, 98, 255, 0.3);
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
}

.progress-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 19px;
}

.chart {
    width: 70px;
    height: 70px;
    min-width: 70px;
    position: relative;
}

.chart--svg {
    width: 100%;
    height: inherit;
}

.giftbox--svg {
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
}

.info {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.percents {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
}

.text {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1px;
    color: #FFFFFF;
    margin-top: 7px;
    font-weight: 400;
}

.tooltip {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
}
</style>