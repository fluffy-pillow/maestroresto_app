<template>
    <v-ons-toolbar static class="additional-head">
        <div class="center">
            <div class="container">
                <v-ons-back-button>

                </v-ons-back-button>
                <button class="heart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    </v-ons-toolbar>
</template>

<script>
    export default {
        name: "AdditionalHead"
    }
</script>

<style scoped>
.additional-head {
    height: calc(44px + env(safe-area-inset-top)) !important;
    display: flex;
    align-items: flex-end;
    background: #ffffff !important;
    z-index: 999999;
}
.center {
    width: 100%;
    height: 44px !important;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.heart {
    width: 24px;
    height: 24px;
}

.heart svg {
    width: 100%;
    height: auto;
}

.heart svg path {
    fill: #ADB3BC;
}

.back-button {
    background: rgba(97, 112, 125, 0.1);
    width: 30px;
    height: 30px;
    padding: 0;
    background-image: url(../../assets/images/arrow-left-white.svg);
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;
}
</style>