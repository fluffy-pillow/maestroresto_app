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
    import SearchResultsItem from "@/components/Learning/Search/Learning/SearchResultsItem";


    export default {
      name: "Learning",
      components: {SearchResultsItem, SearchResultsList, SearchResultsBlock},
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
                  image: 'dish.png'
                }
              ],
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
