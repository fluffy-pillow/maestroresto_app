<template>
    <div class="action-sheet-overlay" :class="{show: bShow}">
        <div class="action-sheet-outer">
            <div class="action-sheet-middle" v-click-outside="onClickOutside">
                <div class="action-sheet-inner">
                    <component :is="comp"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vClickOutside from 'v-click-outside'

    export default {
        name: "ActionSheet",
        data () {
            return {
                bShow: false,
                comp: null
            }
        },
        directives: {
            clickOutside: vClickOutside.directive
        },
        methods: {
            onClickOutside () {
                this.bShow = false
            }
        },
        created () {
            let that = this
            this.$eventBus.$on('open-action-sheet', function (data) {
                that.bShow = true
                that.comp = data
            })
            this.$eventBus.$on('close-action-sheet', function () {
                that.bShow = false
            })
        }
    }
</script>

<style scoped>
.action-sheet-overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    overflow: hidden;
}

.action-sheet-outer {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateY(100vh);
    transition: transform 0.2s ease-in-out;
}

.action-sheet-middle {
    background: #FFFFFF;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;

}

.action-sheet-inner {
   width: 100%;
}

.action-sheet-overlay.show {
   visibility: visible;
   opacity: 1;
}

.action-sheet-overlay.show .action-sheet-outer {
    transform: translateY(0);
}
</style>