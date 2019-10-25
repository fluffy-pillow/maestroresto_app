<template>
    <v-ons-page>
      <SearchResultsBlock
        v-for="(item, key) of items"
        :key="key"
        :category="item.category"
      >
        <SearchResultsList>
          <SearchResultsItem
            v-for="(item1, key1) of item.response"
            :key="key1"
            :data="item1"
          >
          </SearchResultsItem>
        </SearchResultsList>
      </SearchResultsBlock>
    </v-ons-page>
</template>

<script>
    import SearchResultsBlock from "@/components/Learning/Search/SearchResultsBlock";
    import SearchResultsList from "@/components/Learning/Search/SearchResultsList";
    import SearchResultsItem from "@/components/Learning/Search/Menu/SearchResultsItem";
    export default {
      name: "Menu",
      components: {SearchResultsItem, SearchResultsList, SearchResultsBlock},
      data ()  {
        return {
          items: [
            {
              category: 'Красные вина',
              response: [
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png'
                },
              ],
            },
            {
              category: 'Горячие блюда',
              response: [
                {
                  name: 'Филе миньон с соусом борделез и картофелем конфи',
                  desc1: 'очень вкусно',
                  desc2: 'и аппетитно',
                  image: 'dish.png'
                },
                {
                  name: 'Филе миньон с соусом борделез и картофелем конфи',
                  desc1: 'очень вкусно',
                  desc2: 'и аппетитно',
                  image: 'dish.png'
                },
                {
                  name: 'Филе миньон с соусом борделез и картофелем конфи',
                  desc1: 'очень вкусно',
                  desc2: 'и аппетитно',
                  image: 'dish.png'
                },
               ]
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
