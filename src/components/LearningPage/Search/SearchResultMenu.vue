<template>
    <section class="search-result-menu">
        <div class="found" v-if="filteredResponse.length > 0">
            <div class="item"
                 v-for="(item, key) of filteredResponse"
                 :key="key"
            >
                <h2 class="item-head">{{item.category}}</h2>
                <div class="item-body">
                    <ul class="search-results-items">
                        <li
                                v-for="(item1, key1) of item.response"
                                :key="key1"
                                class="search-results-item"
                        >
                          <span class="left">
                            <span class="image">
                              <img :src="require('@/assets/uploads/' + item1.image)">
                            </span>
                          </span>
                          <span class="right">
                            <span class="name">
                              {{item1.name}}
                            </span>
                            <span class="desc-wrapper">
                              <span class="desc">
                                {{item1.desc1}}
                              </span>
                              <span class="desc">
                                {{item1.desc2}}
                              </span>
                            </span>
                          </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <SearchNotFound v-else></SearchNotFound>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    import SearchNotFound from "./SearchNotFound";

    export default {
        name: "SearchResultMenu",
        components: {SearchNotFound},
        props: {
            data: Object
        },
        computed: {
            ...mapGetters({
                query: 'search/getQuery'
            }),
            filteredResponse: function () {
                let that = this
                return this.data.data.filter(function (element) {
                    return element.response.some( function (subElement) {
                        return subElement.keyword.includes(that.query)
                    })
                })
            }

        }
    }
</script>

<style scoped>
    .item-head {
        text-align: left;
        margin-top: 20px;
    }

    .search-result-menu {
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 28px;
    }

    .search-results-items {
        padding-bottom: 81px;
    }

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
        font-family: Futura;
    }

    .desc {
        letter-spacing: -0.078px;
        font-size: 14px;
        line-height: 18px;
        color: #61707D;
        font-family: Futura;
    }

    .desc-wrapper {
        display: flex;
        justify-content: space-between;
    }


    .search-result-menu::-webkit-scrollbar {
        display: none;
    }

    .search-result-menu::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>