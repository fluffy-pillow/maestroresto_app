<template>
    <main class="main-main-menu">
        <Tabbar :active-index.sync="activeIndex"></Tabbar>
        <SectionContainer>
            <Section
                v-for="(item, key) of items"
                :key="key"
                :content="item.content"
                :active="activeIndex === key"
            >
            </Section>
        </SectionContainer>
    </main>
</template>

<script>
    import Tabbar from "./Tabbar";
    import Section from "./Section";
    import SectionContainer from "./SectionContainer";
    export default {
        name: "MainMainMenu",
        components: {SectionContainer, Section, Tabbar},
        data () {
            return {
                activeIndex: 0,
                items: [
                    {
                        title: 'Горячее',
                        content: [
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            },
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            }
                        ]
                    },
                    {
                        title: 'Салаты',
                        content: [
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            }
                        ]
                    },
                    {
                        title: 'Напитки',
                        content: [
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            }
                        ]
                    },
                    {
                        title: 'Десерты',
                        content: [
                            {
                                title: 'Отбивные по-французски',
                                weight: '250 гр.',
                                image: 'french-meat.png'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.main-main-menu {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-bottom: 81px;
}
</style>