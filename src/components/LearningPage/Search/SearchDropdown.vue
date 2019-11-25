<template>
    <div class="search-dropdown-outer" :class="{show: bShow}"  v-if="bShow">
      <div class="search-dropdown-middle">
        <v-ons-page class="search-dropdown-inner">
          <v-ons-toolbar class="segment-container">
            <v-ons-segment class="segment" tabbar-id="tabbar" :index.sync="segmentIndex">
              <button>Меню</button>
              <button>Обучение</button>
            </v-ons-segment>
          </v-ons-toolbar>
          <v-ons-tabbar id="tabbar"
                        :tabs="tabs"
                        :index.sync="tabbarIndex"
          >
          </v-ons-tabbar>
        </v-ons-page>
      </div>
    </div>
</template>

<script>
    import Learning from '@/pages/Learning/Search/Learning'
    import Menu from '@/pages/Learning/Search/Menu'
    import {mapGetters} from 'vuex'

    export default {
        name: "SearchDropdown",
        data () {
            return {
                bShow: false,
                segmentIndex: 0,
                tabbarIndex: 0,
                tabs: [
                  {
                    page: Menu,
                    key: "Menu"
                  },
                  {
                    page: Learning,
                    key: "Learning"
                  }
                ]
            }
        },
        computed: {
            ...mapGetters({
                query: 'search/getQuery'
            })
        },
        watch: {
            query: function (newValue) {
                if (newValue.length > 0) {
                    this.bShow = true
                } else {
                    this.bShow = false
                }

            }
        }
    }
</script>

<style scoped>
.search-dropdown-middle {
  position: relative;
  height: 100%;
}

.search-dropdown-outer {
    visibility: hidden;
    height: 100vh;
    position: absolute;
    width: 100%;
    margin-top: 8px;
    transform-origin: top;
    opacity: 0;
    transform: scaleY(0);
    transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
    right: 0;
}

.search-dropdown-outer.show {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
}

.segment {
  min-width: 100%;
  display: flex;
  box-shadow: none;
  min-height: 45px;
  border-bottom: 1px solid #EFF1F2 !important;
}

.segment-container {
  background-image: none;
  background-color: #ffffff;
  box-shadow: none;
  height: 46px !important;
}


</style>
