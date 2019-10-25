<template>
  <div id="app">
    <v-ons-page class="main-page">
      <SystemMessage></SystemMessage>
      <Navigation class="navigation" :class="{iphonex: $ons.platform.isIPhoneX()}"></Navigation>
      <Footer v-show="bAuthorized"></Footer>
    </v-ons-page>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import Footer from "./components/Footer";
import SystemMessage from "./components/SystemMessage";
export default {
  name: 'app',
  components: {SystemMessage, Footer},
  computed: {
    ...mapGetters({
      bAuthorized: 'user/isAuthorized'
    })
  }
}
</script>

<style>
.segment__item input[type=radio]:checked + .segment__button {
  background-color: #ffffff !important;
  border-radius: 6.93px;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
}

.segment__item input[type=radio]:not(:checked) + .segment__button {
  background-color: transparent !important;
  border: 0.5px solid transparent;
}


.segment__button, .segment__item input[type=radio]:active + .segment__button {
  letter-spacing: -0.084px;
  color: #171725 !important;
  font-size: 14px;
  border: 0.5px solid transparent;
  transition: none;
}


.navigation.iphonex > .dashboard > .page__content, .navigation.iphonex > .learning > .page__content {
  padding-top: calc(constant(safe-area-inset-top)*2) !important;
  padding-top: calc(env(safe-area-inset-top)*2) !important;
  top: 0;
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


.back-button__icon {
  display: none !important;
}

.back-button__label {
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
}

h1 {
  font-family: 'Rubik', sans-serif !important;
  font-weight: 300 !important;
  font-size: 32px !important;
  line-height: 38px;
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
