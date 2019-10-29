<template>
    <v-ons-page>
      <div v-if="filteredItems.length > 0">
          <SearchResultsBlock
            v-for="(item, key) of filteredItems"
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
      </div>
      <div v-else>
         <SearchNotFound>
         </SearchNotFound>
      </div>
    </v-ons-page>
</template>

<script>
    import SearchResultsBlock from "@/components/Learning/Search/SearchResultsBlock";
    import SearchResultsList from "@/components/Learning/Search/SearchResultsList";
    import SearchResultsItem from "@/components/Learning/Search/Menu/SearchResultsItem";
    import SearchNotFound from "@/components/Learning/Search/SearchNotFound";
    import {mapGetters} from 'vuex'

    export default {
      name: "Menu",
      components: {SearchNotFound, SearchResultsItem, SearchResultsList, SearchResultsBlock},
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
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
                },
                {
                  name: 'Винья Темпрана Олд Вайнс Гарнача',
                  desc1: 'красное сухое',
                  desc2: 'Испания, Кампо де Борха',
                  image: 'dish.png',
                  keyword: 'вино'
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
                  image: 'dish.png',
                  keyword: 'Филе'
                },
                {
                  name: 'Филе миньон с соусом борделез и картофелем конфи',
                  desc1: 'очень вкусно',
                  desc2: 'и аппетитно',
                  image: 'dish.png',
                  keyword: 'Филе'
                },
                {
                  name: 'Филе миньон с соусом борделез и картофелем конфи',
                  desc1: 'очень вкусно',
                  desc2: 'и аппетитно',
                  image: 'dish.png',
                  keyword: 'Филе'
                },
               ]
            }
          ]
        }
      },
      computed: {
        ...mapGetters({
            query: 'search/getQuery'
        }),
        filteredItems: function () {
            let that = this
            return this.items.filter(function (element) {
                return element.response.some( function (subElement) {
                    return subElement.keyword.includes(that.query)
                })
            })
        }
      }
    }
</script>

<style scoped>

</style>
