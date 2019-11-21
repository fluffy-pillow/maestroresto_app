<template>
    <div class="section-container" ref="sectionContainer">
        <div class="sections" ref="sections"
             :style="{transform: 'translateX(-' +
            ((this.totalWidth/this.sectionsCount) * ($parent.activeIndex))
          + 'px)'}"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionContainer",
        data () {
            return {
                totalWidth: 0,
                sectionsCount: 0
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.totalWidth = this.$refs.sections.clientWidth
                this.sectionsCount = this.$refs.sections.children.length
            })
        }
    }
</script>

<style scoped>
    .section-container {
        overflow: hidden;
    }

    .sections {
        display: flex;
        width: max-content;
        transition: transform 0.2s ease-in-out;
    }
</style>