import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    window: {
      backgroundColor: '#f5f5f5'
    },
    usingComponents: {
      "i-tabs": "/iview/tabs/index",
      "i-tab": "/iview/tab/index",
      "i-icon": "/iview/icon/index",
      "i-tag": "/iview/tag/index",
      "i-drawer": "/iview/drawer/index",
      "i-avatar": "/iview/avatar/index"
    },
  }
}