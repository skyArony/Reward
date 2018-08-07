import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    window: {
      backgroundColor: '#eeeeee'
    },
    usingComponents: {
      "i-button": "/iview/button/index",
      "i-tabs": "/iview/tabs/index",
      "i-tab": "/iview/tab/index",
      "i-icon": "/iview/icon/index"
    },
  }
}