import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    window: {
    },
    usingComponents: {
      "i-input": "/iview/input/index",
      "i-icon": "/iview/icon/index",
    },
  }
}