<template>
    <main class="main-cerification">
        <CertificationList>
            <CertificationItem
                v-for="(item, key) of data"
                :key="key"
                :data="item"
            >

            </CertificationItem>
        </CertificationList>
    </main>
</template>

<script>
    import CertificationList from "./CertificationList";
    import CertificationItem from "./CertificationItem";
    export default {
        name: "MainCertification",
        components: {CertificationItem, CertificationList},
        props: {
            data: Array
        }
    }
</script>

<style scoped>
.main-cerification {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 81px;
}
</style>