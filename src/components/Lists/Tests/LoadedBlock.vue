<template>
    <div class="loaded-block">
        <div class="head">
            <h3>Начатые тесты</h3>


            <div class="arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.906555 6.75H9.28406L5.62405 10.41C5.33156 10.7025 5.33156 11.1825 5.62405 11.475C5.91655 11.7675 6.38906 11.7675 6.68155 11.475L11.6241 6.5325C11.9166 6.24 11.9166 5.7675 11.6241 5.475L6.68906 0.524998C6.54893 0.384558 6.35869 0.305634 6.16031 0.305634C5.96192 0.305634 5.77168 0.384558 5.63156 0.524998C5.33906 0.817498 5.33906 1.29 5.63156 1.5825L9.28406 5.25H0.906555C0.494055 5.25 0.156555 5.5875 0.156555 6C0.156555 6.4125 0.494055 6.75 0.906555 6.75Z" fill="#3DD498"/>
                </svg>
            </div>
        </div>
        <div class="body">
            <TestsList v-if="unfinishedTests && unfinishedTests.length > 0">
                <TestItem
                        v-for="(test, key) of tests"
                        :key="key"
                        :data="test"
                >
                </TestItem>
            </TestsList>
            <NoTests v-else>

            </NoTests>
        </div>

    </div>
</template>

<script>
    import TestItem from "./TestItem";
    import TestsList from "./TestsList";
    import NoTests from "./NoTests";


    export default {
        name: "LoadedBlock",
        components: {NoTests, TestsList, TestItem},
        props: {
            unfinishedTests: Array
        },
    }
</script>

<style scoped>
    .loaded-block {
        width: 100%;
        padding-top: 20px;
        margin-bottom: 80px;
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
    }

    .arrow {
        display: flex;
    }

</style>
