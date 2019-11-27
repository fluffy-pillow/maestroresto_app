<template>
    <v-ons-page class="certification-results">
        <DefaultHeader :close-button-variant="'cross'"></DefaultHeader>
        <main>
            <section class="short-info">
                <div class="image">
                    <img :src="require('@/assets/images/test-results.svg')">
                </div>
                <Rating></Rating>
                <div class="congratulations">
                    Поздравляем, аттестация пройдена!
                </div>
            </section>
            <section class="controls">
                <button class="back-button" @click="openCertificationPage">
                    Запросить пересдачу
                </button>
                <button class="again-button" @click="openCertificationsPage">
                    Вернуться на главный экран
                </button>
            </section>
        </main>
    </v-ons-page>
</template>

<script>
    import DefaultHeader from "../components/DefaultHeader";
    import Rating from "../components/Test/Results/Rating";

    export default {
        name: "CertificationResult",
        components: {Rating, DefaultHeader},
        methods: {
            openCertificationsPage () {
                this.$router.push('/certifications')
            },
            openCertificationPage () {
                this.$router.push(this.$route.matched[this.$route.matched.length - 2].path + '/' + this.$route.params.slug + '/1')
            }
        }
    }
</script>

<style scoped>
    .controls {
        margin-top: 64px;
    }

    main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: calc(100px + env(safe-area-inset-top));
    }

    .image {
        margin-top: 60px;
        display: flex;
        justify-content: center;
    }

    .stars {
        margin-top: 16px;
        justify-content: center;
    }

    .back-button {
        background: #415393;
        border: 1px solid #415393;
        box-sizing: border-box;
        border-radius: 16px;
        height: 50px;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        width: 100%;
    }

    .again-button {
        color: #415393;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        margin-top: 23px;
        width: 100%;
    }

    .congratulations {
        color: #61707D;
        letter-spacing: 0.04px;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        margin-top: 44px;
        text-align: center;
    }
</style>