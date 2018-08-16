import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '广场详情',
    usingComponents: {
      'i-button': '/iview/button/index'
    }
  }
}
