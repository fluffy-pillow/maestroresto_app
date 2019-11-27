<template>
    <div class="tabs-content" ref="tabsContent">
        <div class="content" ref="content"
             :style="{transform: 'translateX(-' +
            ((totalWidth/sectionsCount) * (activeIndex))
          + 'px)'}"
        >
            <div class="component-wrapper"
                 v-for="(tab, key) of tabs"
                 :key="key"
                 :class="{active: key === activeIndex}"
            >
                <component
                    :is="tab.component"
                    :data="tab.props"
                ></component>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsContent",
        data () {
            return {
                totalWidth: 0,
                sectionsCount: 0
            }
        },
        props: {
           tabs: Array,
           activeIndex: Number
        },
        mounted () {
            this.$nextTick(() => {
                this.totalWidth = this.$refs.content.clientWidth
                this.sectionsCount = this.$refs.content.children.length
            })
        }
    }
</script>

<style scoped>
    .tabs-content {
        overflow: hidden;
    }

    .content {
        display: flex;
        width: max-content;
        transition: transform 0.2s ease-in-out;
    }

    .component-wrapper {
        width: 100vw;
        display: flex;
        height: 0;
        overflow: hidden;
    }

    .component-wrapper.active {
        height: auto;
        overflow: auto;
    }

    .component-wrapper section {
        width: 100%;
    }

</style>