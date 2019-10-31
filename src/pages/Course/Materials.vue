<template>
    <div class="materials">
        <MainMaterials></MainMaterials>
    </div>
</template>


<script>
    import MainMaterials from "@/components/Course/Materials/MainMaterials";
    export default {
        name: "Materials",
        components: {MainMaterials}
    }
</script>

<style scoped>
.materials {
    width: 100vw;
    -webkit-overflow-scrolling: touch !important;
    min-width: 100vw;
}
</style>