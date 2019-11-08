<template>
    <div class="action-sheet-overlay" :class="{show: bShow}">
        <div class="action-sheet-outer">
            <div class="action-sheet-inner">
                <component :is="comp"></component>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActionSheet",
        data () {
            return {
                bShow: false,
                comp: null
            }
        },
        created () {
            let that = this
            this.$eventBus.$on('action-sheet', function (data) {
                that.bShow = true
                that.comp = data
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
    display: flex;
    align-items: flex-end;
}

.action-sheet-outer {
    background: #FFFFFF;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 100%;
    display: flex;
}

.action-sheet-inner {
   padding-left: 16px;
   padding-right: 16px;
}

.action-sheet-overlay.show {
   visibility: visible;
   opacity: 1;
}
</style>