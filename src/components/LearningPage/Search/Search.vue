<template>
    <v-ons-toolbar class="search"
         :class="{transformed: bTransformed, notEmpty: query !== ''}"
    >
        <div class="center">
          <div class="content">
            <SearchInput></SearchInput>
            <SearchDropdown></SearchDropdown>
          </div>
        </div>
    </v-ons-toolbar>
</template>

<script>
    import SearchInput from "./SearchInput";
    import SearchDropdown from "./SearchDropdown";
    import {mapGetters} from 'vuex'

    export default {
        name: "Search",
        components: {SearchDropdown, SearchInput},
        data () {
            return {
                bTransformed: false,
                page: null,
                pageContent: null
            }
        },
        methods: {
          switchStyle () {
            if (this.page) {
              if (this.page.scrollTop >= 1) {
                this.bTransformed = true
              }
              if (this.page.scrollTop <= 1) {
                this.bTransformed = false
              }
            }
          },
        },
        computed: {
            ...mapGetters({
                query: 'search/getQuery'
            })
        },
        mounted () {
           this.page = document.querySelector('.learning.page')
            this.pageContent = this.page.querySelector('.page__content')

            let that = this
            this.pageContent.addEventListener('scroll', function (e) {
               that.switchStyle()
            })
        }
    }
</script>

<style scoped>
.search {
  height: calc(52px + constant(safe-area-inset-top));
  height: calc(52px + env(safe-area-inset-top));
  background-image: none;
  background-color: transparent;
  box-shadow: none;
}

.search.notEmpty {
  height: 100%;
  background-color: #ffffff;
}

.center {
  height: calc(52px + constant(safe-area-inset-top));
  height: calc(52px + env(safe-area-inset-top));
  line-height: unset !important;
  margin: 0;
  display: flex;
  align-items: flex-end;
}

.content {
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}

.search.transformed {
  background-color: #FFFFFF !important;
  box-shadow: 0 5px 2px -1px rgba(0, 0, 0, 0.05);
}
</style>
