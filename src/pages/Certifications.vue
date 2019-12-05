<template>
    <v-ons-page class="certifications" ref="test">
        <StickyHeader :title="'Аттестации'" :show-back-button="false"></StickyHeader>
        <main :class="{empty: !response || response.length === 0}">
            <Certifications v-if="response && response.length > 0" :data="response"></Certifications>
            <CertificationsNotFound v-else></CertificationsNotFound>
        </main>
    </v-ons-page>
</template>

<script>
    import StickyHeader from "../components/StickyHeader";
    import Certifications from "@/components/Lists/Certifications/Certifications";
    import CertificationsNotFound from "../components/Lists/Certifications/CertificationsNotFound";

    export default {
        name: "Certifications",
        components: {CertificationsNotFound, StickyHeader, Certifications},
        data () {
            return {
//                response: []
                response: [
                    {
                        title: 'Ассортиментный минимум блюд предприятий общественного\n' +
                        'питания',
                        duration: 40,
                        scheduled: '21 октября, 9:35',
                    },
                    {
                        title: 'Ассортиментный минимум блюд предприятий общественного\n' +
                        'питания',
                        duration: 40,
                        available: 'с 21 октября по 30 октября',
                        background: 'https://media-cdn.tripadvisor.com/media/photo-s/12/c1/c3/f5/restaurant-araz.jpg'
                    },
                    {
                        title: 'Ассортиментный минимум блюд предприятий общественного\n' +
                        'питания',
                        available: 'с 21 октября по 30 октября',
                    },
                    {
                        title: 'Ассортиментный минимум блюд предприятий общественного\n' +
                        'питания',
                        available: 'с 21 октября по 30 октября',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
main {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 81px;
}

main.empty {
    height: calc(100% - 44px - 81px - env(safe-area-inset-top));
}
</style>