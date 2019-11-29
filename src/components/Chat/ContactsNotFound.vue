<template>
    <div class="contacts-not-found">
        <div class="top">
            <div class="icon">
                <svg width="66" height="57" viewBox="0 0 66 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.6131 39.4282C56.4813 39.4282 56.3488 39.3934 56.2294 39.3229L43.3495 31.6938H29.9531C21.5529 31.6938 14.7188 24.7546 14.7188 16.2251C14.7188 7.69563 21.5529 0.756348 29.9531 0.756348H49.7578C58.1582 0.756348 64.9922 7.69563 64.9922 16.2251C64.9922 22.9896 60.6795 28.9285 54.4031 30.9617L57.3205 38.3675C57.4413 38.6741 57.3569 39.0249 57.1107 39.2406C56.969 39.3646 56.7917 39.4282 56.6131 39.4282ZM29.9531 2.30322C22.3929 2.30322 16.2422 8.54858 16.2422 16.2251C16.2422 23.9016 22.3929 30.147 29.9531 30.147H43.5553C43.6903 30.147 43.8227 30.1833 43.9392 30.2523L55.0831 36.8531L52.676 30.7428C52.5948 30.5363 52.6048 30.3043 52.7038 30.106C52.8029 29.9077 52.9809 29.7621 53.193 29.7066C59.2432 28.122 63.4688 22.5781 63.4688 16.2251C63.4688 8.54858 57.318 2.30322 49.7578 2.30322H29.9531Z" fill="#61707D" stroke="#61707D"/>
                    <path d="M9.38687 56.4439C9.20833 56.4439 9.031 56.3803 8.88932 56.2561C8.64298 56.0405 8.55873 55.6898 8.67954 55.383L11.5971 47.9772C5.32051 45.9442 1.00781 40.0051 1.00781 33.2408C1.00781 27.5416 4.07998 22.3204 9.02521 19.6147C9.39556 19.412 9.85746 19.5528 10.0572 19.9287C10.2568 20.3047 10.1183 20.7739 9.74793 20.9765C5.29659 23.4119 2.53125 28.1113 2.53125 33.2408C2.53125 39.5938 6.75681 45.1376 12.807 46.7221C13.0191 46.7776 13.1973 46.9232 13.2962 47.1215C13.395 47.3198 13.4052 47.5518 13.3239 47.7583L10.9169 53.8686L22.0608 47.2678C22.1773 47.199 22.3097 47.1625 22.4447 47.1625H36.0469C41.0986 47.1625 45.7268 44.3547 48.1255 39.8346C48.3249 39.4587 48.7863 39.3175 49.1573 39.5208C49.5276 39.7234 49.6661 40.1924 49.4664 40.5685C46.8019 45.5901 41.6598 48.7095 36.0469 48.7095H22.6507L9.77063 56.3385C9.65119 56.4091 9.51865 56.4439 9.38687 56.4439Z" fill="#61707D" stroke="#61707D"/>
                    <circle cx="28" cy="16" r="3" stroke="#3DD498" stroke-width="2"/>
                    <circle cx="40" cy="16" r="3" stroke="#3DD498" stroke-width="2"/>
                    <circle cx="52" cy="16" r="3" stroke="#3DD498" stroke-width="2"/>
                </svg>
            </div>
            <div class="message">
                У вас еще нет чатов
            </div>
            <div class="recommendation">
                Начните диалог с
            </div>
        </div>
        <div class="bottom">
            <button class="default-button" @click="handleClick">
                 Написать
            </button>
        </div>
    </div>
</template>

<script>
    import CreateChat from "./CreateChat";
    export default {
        name: "ContactsNotFound",
        methods: {
            handleClick () {
                this.$eventBus.$emit('open-action-sheet', CreateChat)
            }
        }
    }
</script>

<style scoped>
    .contacts-not-found {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 16px;
        padding-right: 16px;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        flex: 1.15;
    }

    .bottom {
        flex: 0.85;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: 31px;
        width: 100%;
    }

    .message {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 0.04px;
        color: #61707D;
        margin-top: 31px;
        text-align: center;
        width: 280px;
    }

    .recommendation {
        margin-top: 16px;
        text-align: center;
        letter-spacing: 0.16px;
        color: #61707D;
        font-size: 14px;
        line-height: 20px;
        width: 300px;
    }

    .default-button {
        background: #3DD498;
        border-radius: 16px;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        width: 100%;
        height: 50px;
    }
</style>