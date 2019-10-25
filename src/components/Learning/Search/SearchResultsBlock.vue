<template>
  <div class="search-result-block">
    <h2 class="head">{{category}}</h2>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchResultsBlock",
        props: {
          category: String
        }
    }
</script>

<style scoped>
.head {
  text-align: left;
}

.search-result-block {
  padding-left: 16px;
  padding-right: 16px;
}

.search-result-block:last-child {
  padding-bottom: 200px;
}

.body {
  margin-top: 8px;
}
</style>
