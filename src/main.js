// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import PIXI from 'pixi.js/dist/pixi.min.js'
import * as PIXI from 'pixi.js'
import App from './App'
import router from './router'

require("./assets/style/global.less")

Vue.config.productionTip = false

window.PIXI = PIXI
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
