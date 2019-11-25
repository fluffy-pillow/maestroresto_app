// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import mixin from './mixin';
import VueRouter from 'vue-router'
import db from './db/db'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import i18n from './i18n'
import Axios from 'axios'
import VueCarousel from 'vue-carousel';
import Vue2TouchEvents from 'vue2-touch-events'
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
import VOnsModal from 'vue-onsenui/esm/components/VOnsModal';
import DotLoader from 'vue-spinner/src/DotLoader.vue';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css'


Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.use(VueRouter)
Vue.use(VueCarousel);
Vue.use(Vue2TouchEvents)
Vue.mixin(mixin)
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
Vue.component(DotLoader.name, DotLoader);
Vue.component(VOnsModal.name, VOnsModal);

Vue.prototype.$eventBus = new Vue();

Vue.prototype.$http = Axios;


sync(store, router)

const app = new Vue({
    store,
    i18n,
    router,
    render: h => h(App),
    mounted() {
        console.log('mounted')
        document.addEventListener('deviceReady', this.onDeviceReady, false)
    },
    methods: {
        onDeviceReady() {
            let that = this
            Keyboard.shrinkView(false);
//            Keyboard.shrinkView(false);
            Keyboard.hideFormAccessoryBar(true);
            Keyboard.disableScrollingInShrinkView(true);
            document.addEventListener('touchstart', this.onClick, false)
            navigator.globalization.getPreferredLanguage(
                function (language) {
                    that.$i18n.locale = language.value.split('-')[0]
                },
                function () {
                    alert('Error getting language\n');
                }
            );
        },
        removeFocusFromAllInputs() {
            let el = document.querySelector('input:focus')
            if (el && Keyboard.isVisible)
                el.blur()
        },
        onClick(e) {
            if (!e.target.classList.contains('need-keyboard')) {
                Keyboard.hide()
                this.removeFocusFromAllInputs()
            }
        }
    }
})

document.addEventListener(typeof cordova !== "undefined" ? "deviceready" : "DOMContentLoaded", () => {
    db.init((response) => {
        if (response.ready) {
            app.$mount('#app')
        }
    })
});


