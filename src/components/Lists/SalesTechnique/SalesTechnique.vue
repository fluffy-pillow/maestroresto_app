<template>
    <section class="sales-technique">
        <div class="head">
            <h3>Техника активных и эффективных продаж</h3>
            <div class="arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.906555 6.75H9.28406L5.62405 10.41C5.33156 10.7025 5.33156 11.1825 5.62405 11.475C5.91655 11.7675 6.38906 11.7675 6.68155 11.475L11.6241 6.5325C11.9166 6.24 11.9166 5.7675 11.6241 5.475L6.68906 0.524998C6.54893 0.384558 6.35869 0.305634 6.16031 0.305634C5.96192 0.305634 5.77168 0.384558 5.63156 0.524998C5.33906 0.817498 5.33906 1.29 5.63156 1.5825L9.28406 5.25H0.906555C0.494055 5.25 0.156555 5.5875 0.156555 6C0.156555 6.4125 0.494055 6.75 0.906555 6.75Z" fill="#3DD498"/>
                </svg>
            </div>
        </div>
        <div class="body">
            <SalesTechniqueList>
                <SalesTechniqueItem
                    v-for="(item, key) of items"
                    :key="key"
                    :data="item"
                >
                </SalesTechniqueItem>
            </SalesTechniqueList>

            <div class="more">
                <button class="more-button">
                    Показать больше
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import SalesTechniqueList from "./SalesTechniqueList";
    import SalesTechniqueItem from "./SalesTechniqueItem";
    export default {
        name: "SalesTechnique",
        components: {SalesTechniqueItem, SalesTechniqueList},
        data () {
            return {
                items: [
                    {
                        percents: 57,
                        name: 'Основы ресторанного бизнеса',
                        exercises: 14,
                        time: 14,
                        image: 'restaurant-basics.jpeg'
                    },
                    {
                        percents: 100,
                        result: 3,
                        name: 'Продукт ресторана – ресторан продает атмосферу удовольствия',
                        exercises: 12,
                        time: 64,
                        image: 'restaurant-product.jpeg'
                    },
                    {
                        percents: 0,
                        name: 'Персонал ресторана и его функциональные обязанности',
                        exercises: 21,
                        time: 28
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.sales-technique {
    margin-top: 21px;
    padding-bottom: 21px
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

.body {
    padding-left: 16px;
    padding-right: 16px;
}

.more {
    margin-top: 16px;
}

.more-button {
    height: 50px;
    background: #FFFFFF;
    border: 1px solid rgba(61,212,152, 0.5);
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    color: #3DD498;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
}
</style>
