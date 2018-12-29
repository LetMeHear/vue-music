import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import router from './router'
import fastclick from 'fastclick'

import './common/stylus/index.styl'

// 消除body下所有按钮的点击的300ms延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
