<template>
    <section>
        <CertificationsList>
            <CertificationsItem
                    v-for="(item, key) of data"
                    :key="key"
                    :data="item"
            >

            </CertificationsItem>
        </CertificationsList>
    </section>
</template>

<script>
    import CertificationsList from "./CertificationsList";
    import CertificationsItem from "./CertificationsItem";

    export default {
        name: "Certifications",
        components: {
            CertificationsList, CertificationsItem
        },
        props: {
            data: Array
        }
    }
</script>

<style scoped>

</style>