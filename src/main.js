// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '../store'
import VueOnsen from 'vue-onsenui/esm';
import VOnsPage from 'vue-onsenui/esm/components/VOnsPage';
import VOnsNavigator from 'vue-onsenui/esm/components/VOnsNavigator';
import VOnsButton from 'vue-onsenui/esm/components/VOnsButton';
import VOnsToolbar from 'vue-onsenui/esm/components/VOnsToolbar';
import VOnsTabbar from 'vue-onsenui/esm/components/VOnsTabbar';
import VOnsTab from 'vue-onsenui/esm/components/VOnsTab';
import VOnsSearchInput from 'vue-onsenui/esm/components/VOnsSearchInput';
import VOnsBottomToolbar from 'vue-onsenui/esm/components/VOnsBottomToolbar';
import VOnsPullHook from 'vue-onsenui/esm/components/VOnsPullHook';
import VOnsProgressCircular from 'vue-onsenui/esm/components/VOnsProgressCircular';
import VOnsSegment from 'vue-onsenui/esm/components/VOnsSegment';
import VOnsBackButton from 'vue-onsenui/esm/components/VOnsBackButton';

import {navigation, navigationButton, navigationMixin} from "./navigation";

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css'


Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.mixin(navigationMixin)
Vue.component(VOnsPage.name, VOnsPage);
Vue.component(VOnsNavigator.name, VOnsNavigator);
Vue.component(VOnsButton.name, VOnsButton);
Vue.component(VOnsToolbar.name, VOnsToolbar);
Vue.component(VOnsTabbar.name, VOnsTabbar);
Vue.component(VOnsTab.name, VOnsTab);
Vue.component(VOnsSearchInput.name, VOnsSearchInput);
Vue.component(VOnsBottomToolbar.name, VOnsBottomToolbar);
Vue.component(VOnsPullHook.name, VOnsPullHook);
Vue.component(VOnsProgressCircular.name, VOnsProgressCircular);
Vue.component(VOnsSegment.name, VOnsSegment);
Vue.component(VOnsBackButton.name, VOnsBackButton);
Vue.component(navigationButton.name, navigationButton);
Vue.component(navigation.name, navigation);

Vue.prototype.$eventBus = new Vue();
/* eslint-disable no-new */

new Vue({
  store,
  render: h => h(App),
  mounted () {
      console.log( 'mounted' )
      document.addEventListener( 'deviceReady', this.onDeviceReady, false )
  },
  methods : {
      onDeviceReady () {
          Keyboard.shrinkView(false);
          Keyboard.hideFormAccessoryBar(true);
          Keyboard.disableScrollingInShrinkView(true);
          document.addEventListener( 'touchstart', this.onClick, false )
      },
      onClick ( e ) {
          console.log( 'clicked' )
          console.log( e.target.tagName )
          if ( e.target.tagName !== 'INPUT' ) {
              Keyboard.hide()
          }
      }
  }
} ).$mount( '#app' )
