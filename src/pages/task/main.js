import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    navigationBarTitleText: '悬赏令详情',
    usingComponents: {
      'i-tag': '/iview/tag/index',
      'i-avatar': '/iview/avatar/index'
    }
  }
}
