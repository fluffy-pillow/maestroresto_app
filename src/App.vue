<template>
  <div id="app">
    <v-ons-page class="main-page">
      <ActionSheet></ActionSheet>
      <GlobalPreloader></GlobalPreloader>
      <SystemMessage></SystemMessage>
      <Navigation class="navigation" :class="{iphonex: $ons.platform.isIPhoneX()}"></Navigation>
      <Footer v-show="bFooterIsShow"></Footer>
    </v-ons-page>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import Footer from "./components/Footer";
import SystemMessage from "./components/SystemMessage";
import GlobalPreloader from "./components/GlobalPreloader";
import Navigation from "./components/Navigation";
import ActionSheet from "./components/ActionSheet";

export default {
  name: 'app',
  components: {ActionSheet, Navigation, GlobalPreloader, SystemMessage, Footer},
  computed: {
    ...mapGetters({
      bFooterIsShow: 'footer/isShow',
    })
  }
}
</script>

<style>

@font-face {
  font-family: Rubik;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('fonts/Rubik-Regular.ttf') format('truetype');
}

@font-face {
  font-family: Lancelot;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('fonts/Lancelot-Regular.ttf') format('truetype');
}

@font-face {
  font-family: Rubik;
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url('fonts/Rubik-Medium.ttf') format('truetype');
}

@font-face {
  font-family: Rubik;
  font-weight: 300;
  font-style: normal;
  font-display: swap;
  src: url('fonts/Rubik-Light.ttf') format('truetype');
}


.course .page__content {
  top: calc(0px - env(safe-area-inset-top) * 7) !important;
}

.segment__item input[type=radio]:checked + .segment__button {
  color: #4B4B4B;
  border-color: #3DD498 !important;
}

.search-dropdown-outer .segment__button {
  line-height: 45px;
  height: 45px;
}

.main-course .segment__button {
  line-height: 49px;
  height: 49px;
}

.segment__item  .segment__button {
  width: min-content !important;
  margin: 0 auto;
  background: none !important;
  color: #61707D;
  font-size: 16px;
  border-bottom: 3px solid transparent !important;
  border-left-width: 0px !important;
  border-top-width: 0px !important;
  border-right-width: 0px !important;
  border-radius: 0px !important;
}

.toolbar--material__center:last-child, .toolbar--material__center:first-child {
  margin: 0 !important;
}

.toolbar.toolbar--material+.page__background+.page__content, .toolbar+.page__background+.page__content {
  top: 0 !important;
}

.toolbar.toolbar--material+.page__background {
  top: 0 !important;
}

.segment__item input[type=radio]:not(:checked) + .segment__button {

}

.segment__button, .segment__item input[type=radio]:active + .segment__button {
  font-size: 16px;
}

.dashboard > .page__content, .learning > .page__content {
  top: 0 !important;
}

.test > .page__content {
  margin-top: calc(env(safe-area-inset-top) * -8) !important;
}

.navigation > .dashboard > .page__content, .navigation > .learning > .page__content {
  padding-top: constant(safe-area-inset-top) !important;
  padding-top: env(safe-area-inset-top) !important;
  top: 0;
}

.navigation > .material > .page__content {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}

.auth .page__content, .restore .page__content, .code  .page__content, .new-password  .page__content {
  padding-left: 16px;
  padding-right: 16px;
}

button:focus {
  outline: none;
}

body {
  margin: 0;
  height: 100vh;
}


.main-course .page__content {
  top: 0 !important;
}

.back-button__icon {
  display: none !important;
}

.back-button__label {
  display: block !important;
  font-weight: 300 !important;
  font-size: 18px !important;
  line-height: 22px !important;
  height: auto !important;
}

.back-button {
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.back-button:active {
  opacity: 1;
}


button {
  border: none;
  padding: 0 !important;
  cursor: pointer;
  background: none;
}

button:focus {
  outline: none !important;
}

ul {
  margin: 0;
  list-style-type: none;
  padding: 0;
}

h1, h2, h3, h4 {
  margin: 0;
  color: #4B4B4B;
  white-space: initial;
}

h1 {
  font-family: 'Rubik', sans-serif !important;
  font-weight: 300 !important;
  font-size: 32px !important;
  line-height: 38px;
}

h4 {
  font-family: 'Rubik', sans-serif !important;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
}

h2 {
  font-weight: 500;
  font-size: 20px !important;
  line-height: 18px;
  letter-spacing: -0.165px;
  font-family: 'Rubik', sans-serif !important;
}

h3 {
  font-weight: 500;
  font-size: 16px !important;
  line-height: 16px;
  letter-spacing: -0.16px;
  font-family: 'Rubik', sans-serif !important;
}

.page {
  font-family: 'Rubik', sans-serif !important;
}

.page .page__background {
  background-color: #ffffff;
}


.page .page__content::-webkit-scrollbar {
  display: none;
}

.page .page__content::-webkit-scrollbar-track {
  background-color: transparent;
}

.page .page__content {
  scrollbar-width: none;
}

#app {
  font-family: 'Rubik', sans-serif !important;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


input {
  border: none;
  background: none;
  padding: 0;
}
</style>
