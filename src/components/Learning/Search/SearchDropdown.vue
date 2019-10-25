<template>
    <v-ons-page class="search-dropdown" :class="{show: bShow}"  v-if="bShow">
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
</template>

<script>
    import Learning from '@/pages/Learning/Search/Learning'
    import Menu from '@/pages/Learning/Search/Menu'

    export default {
        name: "SearchDropdown",
        props: {
            query: String
        },
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
        watch: {
            query: function (newValue) {
                if (newValue.length > 0) {
                    this.$eventBus.$emit('on-search-dropdown-toggle', true)
                    this.bShow = true
                } else {
                    this.$eventBus.$emit('on-search-dropdown-toggle', false)
                    this.bShow = false
                }

            }
        }
    }
</script>

<style scoped>
.search-dropdown {
    visibility: hidden;
    height: 100vh;
    position: absolute;
    width: 100%;
    top: calc(60px + constant(safe-area-inset-top));
    top: calc(60px + env(safe-area-inset-top));
    transform-origin: top;
    opacity: 0;
    transform: scaleY(0);
    transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
}

.search-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
}

.segment {
  min-width: 100%;
  display: flex;
  box-shadow: none;
  background: rgba(118, 118, 128, 0.12);
  border-radius: 8.91px;
  border: 2px solid rgba(118, 118, 128, 0);
  height: 28px;
}

.segment-container {
  padding-left: 16px;
  padding-right: 16px;
  background-image: none;
  background-color: transparent;
}


</style>
