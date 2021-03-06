import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/home/main',
      'pages/task/main',
      'pages/publish/main',
      'pages/message/main',
      'pages/mypublish/main',
      'pages/myget/main',
      'pages/square/main',
      'pages/addsquare/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ef5350',
      navigationBarTitleText: '悬赏令',
      navigationBarTextStyle: 'white'
    }
  }
}
