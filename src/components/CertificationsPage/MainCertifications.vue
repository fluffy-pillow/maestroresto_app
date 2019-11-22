<template>
    <main class="main-cerifications" :class="{empty: !data || data.length === 0}">
        <CertificationsList v-if="data && data.length > 0">
            <CertificationsItem
                v-for="(item, key) of data"
                :key="key"
                :data="item"
            >

            </CertificationsItem>
        </CertificationsList>
        <CertificationsNotFound v-else></CertificationsNotFound>
    </main>
</template>

<script>
    import CertificationsList from "./CertificationsList";
    import CertificationsItem from "./CertificationsItem";
    import CertificationsNotFound from "./CertificationsNotFound";
    export default {
        name: "MainCertifications",
        components: {CertificationsNotFound, CertificationsItem, CertificationsList},
        props: {
            data: Array
        }
    }
</script>

<style scoped>
.main-cerifications {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 81px;
}

.main-cerifications.empty {
    height: calc(100% - 44px - 81px - env(safe-area-inset-top));
}
</style>