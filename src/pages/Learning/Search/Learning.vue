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
          <SearchNotFound></SearchNotFound>
       </div>
    </v-ons-page>
</template>

<script>
    import SearchResultsBlock from "@/components/LearningPage/Search/SearchResultsBlock";
    import SearchResultsList from "@/components/LearningPage/Search/SearchResultsList";
    import SearchResultsItem from "@/components/LearningPage/Search/Learning/SearchResultsItem";
    import SearchNotFound from "@/components/LearningPage/Search/SearchNotFound";

    import {mapGetters} from 'vuex'

    export default {
      name: "Learning",
      components: {SearchNotFound, SearchResultsItem, SearchResultsList, SearchResultsBlock},
      data ()  {
        return {
          items: [
            {
              category: 'Техника активных и эффективных \n' +
              'продаж',
              response: [
                {
                  name: 'Алкогольные напитки на основе винограда (коньяк, бренди, арманьяк...)',
                  exercises: 14,
                  time: 15,
                  image: 'dish.png',
                  keyword: 'вино'

                }
              ],
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
