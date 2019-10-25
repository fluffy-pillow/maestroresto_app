<template>
    <li class="search-results-item">
      <span class="left">
        <span class="image">
          <img :src="require('@/assets/uploads/' + data.image)">
        </span>
      </span>
      <span class="right">
        <span class="name">
          {{data.name}}
        </span>
        <span class="desc-wrapper">
          <span class="desc">
            {{data.desc1}}
          </span>
          <span class="desc">
            {{data.desc2}}
          </span>
        </span>
      </span>
    </li>
</template>

<script>
    export default {
        name: "SearchResultsItem",
        props: {
          data: Object
        }
    }
</script>

<style scoped>
.search-results-item {
  border-bottom: 1px solid #EFF1F2;
  display: flex;
  padding-top: 12px;
  padding-bottom: 11px;
  align-items: center;
}

.search-results-item:last-child {
  border-bottom: none;
}

.image {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  overflow: hidden;
  display: block;
}

.image img {
  width: 100%;
  height: auto;
}

.right {
  margin-left: 16px;
  flex: 1;
}

.left {
  display: block;
  width: 44px;
  height: 44px;
}

.name {
  letter-spacing: -0.078px;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  color: #4B4B4B;
  white-space: initial;
  text-align: left;
}

.desc {
  letter-spacing: -0.078px;
  font-size: 14px;
  line-height: 18px;
  color: #61707D;
}

.desc-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
