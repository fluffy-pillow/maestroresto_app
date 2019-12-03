<template>
    <section class="materials">
        <Materials :items="items"></Materials>
    </section>
</template>

<script>
    import Materials from "../Lists/Materials/Materials";

    export default {
        name: "CourseMaterials",
        components: {Materials},
        data () {
            return {
                items: [
                    {
                        title: 'Правила поведения в зале: общение, расстановка приоритетов, свободные руки, свободные минуты.',
                        desc: 'В процессе обучения вы получите знания и навыки, необходимые официанту в общении с\n' +
                        'гостем — правила поведения, этикет, встреча и приветствие гостя, психотипы гостей.',
                        result: 3,
                        icon: 'material.jpeg',
                        duration: '00:15',
                        locked: false
                    },
                    {
                        title: 'Правило "открытой руки". Подача блюда/напитка гостю по этикету.',
                        desc: 'В процессе обучения вы получите знания и навыки, необходимые официанту в общении с\n' +
                        'гостем — правила поведения, этикет, встреча и приветствие гостя, психотипы гостей.',
                        progress: 75,
                        duration: '00:15',
                        locked: false
                    },
                    {
                        title: 'Как правильно представиться \n' +
                        'и предложить действующие \n' +
                        'в ресторане акции гостю. ',
                        desc: 'В процессе обучения вы получите знания и навыки, необходимые официанту в общении с\n' +
                        'гостем — правила поведения, этикет, встреча и приветствие гостя, психотипы гостей.',
                        icon: 'material.jpeg',
                        duration: '00:15',
                        locked: true
                    },
                    {
                        title: 'Как можно и не нужно повышать сумму чека.',
                        desc: 'В процессе обучения вы получите знания и навыки, необходимые официанту в общении с\n' +
                        'гостем — правила поведения, этикет, встреча и приветствие гостя, психотипы гостей.',
                        icon: 'material.jpeg',
                        duration: '00:15',
                        locked: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.materials {
    padding-left: 16px;
    padding-right: 16px;
    background: #ffffff;
    position: sticky;
    top: 0;
    padding-bottom: 200px;
}

</style>