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
    margin-top: 20px;
    display: flex;
    min-height: 154px;
}

.preload-block.show, .loaded-block.show {
    opacity: 1;
    visibility: visible;
}

.preload-block, .loaded-block {

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
}

.preload-block {
    position: absolute;
}

</style>
