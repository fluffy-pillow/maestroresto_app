<template>
    <v-ons-page class="certifications" @show="onShowPage">
        <Header :title="'Аттестации'"></Header>
        <MainCertifications :data="response"></MainCertifications>
    </v-ons-page>
</template>

<script>
    import {mapActions} from 'vuex'
    import Header from "../components/CertificationsPage/Header";
    import MainCertifications from "../components/CertificationsPage/MainCertifications";

    export default {
        name: "Certifications",
        components: {MainCertifications, Header},
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
        },
        methods: {
            onShowPage () {
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show'
            })
        }
    }
</script>

<style scoped>

</style>