<template>
    <section class="tasks">
        <PreloadBlock :class="{show: !required}"></PreloadBlock>
        <LoadedBlock
                v-if="required"
                :class="{show: required}"
                :required="required">
        </LoadedBlock>
    </section>
</template>

<script>
    import PreloadBlock from "./PreloadBlock";
    import LoadedBlock from "./LoadedBlock";
    export default {
        name: "Tasks",
        components: {LoadedBlock, PreloadBlock},
        props: {
            required: Array
        }
    }
</script>

<style scoped>
.tasks {
    display: flex;
}

.preload-block.show, .loaded-block.show {
    opacity: 1;
    visibility: visible;
    position: relative;
}

.preload-block, .loaded-block {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, position 0.2s ease-in-out 0.2s;
}

.preload-block {
    z-index: 3;
    position: absolute;
}

</style>
