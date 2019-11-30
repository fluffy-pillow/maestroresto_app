<template>
    <v-ons-toolbar static class="header" :class="color">
        <div class="center">

            <div class="header-item">
                <div class="back-button-wrapper" v-if="showBackButton">
                    <v-ons-back-button>

                    </v-ons-back-button>
                </div>
            </div>
            <div class="header-item">
                <div class="title-wrapper" @click="$emit('onTitleClick')">
                    <div class="title"
                         v-if="title"
                         :class="{
                            uppercase: titleUppercase,
                          }"
                    >
                        {{title}}
                    </div>
                    <div class="subtitle" v-if="subTitle">
                        {{subTitle}}
                    </div>
                </div>
            </div>
            <div class="header-item">
                <slot name="rightSideContent"></slot>
            </div>
        </div>
    </v-ons-toolbar>
</template>

<script>
    export default {
        name: "StickyHeader",
        props: {
            title: String,
            showBackButton: {
                type: Boolean,
                default: true
            },
            customContent: {
                type: Boolean,
                deafult: false
            },
            color: {
                type: String,
                default: 'white'
            },
            titleUppercase: {
                type: Boolean,
                default: false
            },
            subTitle: {
                type: String,
                default: null
            }
        }
    }
</script>

<style scoped>
    .header {
        z-index: 999999;
        box-shadow: none !important;
        height: calc(44px + env(safe-area-inset-top)) !important;
        display: flex;
        align-items: flex-end;
        background-image: none !important;
        padding-top: 0 !important;
    }

    .header.white {
        background-color: #ffffff !important;
    }

    .header.transparent {
        background-color: transparent !important;
    }

    .header.green {
        background-color: #3DD498 !important;
    }

    .header.dark-purple {
        background-color: #415393;
    }

    .header.transparent .back-button {
        background-color: rgba(255, 255, 255, 0.4);
    }

    .header.dark-purple .title, .header.green .title {
        color: #ffffff;
    }

    .center {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        height: 44px !important;
        line-height: 44px !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }



    .back-button {
        background-color: rgba(97, 112, 125, 0.1);
        width: 30px;
        height: 30px;
        padding: 0;
        background-image: url(../assets/images/arrow-left-white.svg);
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 50%;
    }

    .header-item {
        flex: 1;
    }

    .title {
        letter-spacing: 0.16px;
        color: #4B4B4B;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
    }

    .title.uppercase {
        text-transform: uppercase;
        letter-spacing: unset;
    }

    .subtitle {
        font-size: 12px;
        line-height: 14px;
        /* identical to box height, or 117% */

        letter-spacing: -0.14px;

        color: #7C7C7C;
    }
</style>