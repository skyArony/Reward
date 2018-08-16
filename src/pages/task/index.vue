<template>
  <div class="container">
    <div class="top-info">
      <div class="title-info">
        <font>我是标题</font>
        <font class="monney">￥ 0.01</font>
      </div>
      <div class="text-info">
        <text>帮我领个快递!地点明基商务广场</text>
      </div>
      <div class="img-info">
        <image class="task-img"
               mode="aspectFill"
               :src="url"></image>
        <image class="task-img"
               mode="aspectFill"
               src="/static/bg2018.png"></image>
        <image class="task-img"
               mode="aspectFill"
               src="/static/bg.png"></image>
      </div>
      <div class="bottom-bar">
        <div class="time-postion">
          <font>明基商务广场</font>
          <font>&nbsp;&nbsp;</font>
          <font>8/7 13:56</font>
        </div>
        <i-tag class="i-tags"
               name="龙门镖局"
               type='border'
               color="blue">
          龙门镖局
        </i-tag>
      </div>
    </div>
    <div class="user-info">
      <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></i-avatar>
      <div class="user-text-info">
        <div class="text-info-top">
          <font style="margin-right:10rpx">独孤求败</font>
          <i-tag class="i-tags"
                 name="黄衣少侠"
                 type='border'
                 color="yellow">
            黄衣少侠
          </i-tag>
        </div>
        <div class="text-info-bottom">我是一个大侠</div>
      </div>
      <div style="display: flex;align-items: center;position: absolute;right: 20rpx;">
        <button type="primary"
                size="mini"
                plain="true">联系</button>
      </div>
    </div>
    <div class="comments"></div>
    <div class="action">
      <button type="primary"
              @click="ToMyGet">揭榜</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
    }
  },
  methods: {
    ToMyGet() {
      const url = '../myget/main'
      wx.redirectTo({ url })
    }
  }
}
</script>

<style scoped>
.top-info {
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  padding: 20rpx;
  box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.3);
}
.title-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 34rpx;
  margin-bottom: 20rpx;
}
.monney {
  color: red;
}
.text-info {
  width: 100%;
  font-size: 28rpx;
  color: #212121;
  margin-bottom: 20rpx;
}
.img-info {
  width: 100%;
  display: flex;
}
.bottom-bar {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.time-postion {
  font-size: 24rpx;
  color: #80848f;
}
.task-img {
  max-width: 235rpx;
  max-height: 235rpx;
  margin-bottom: 10rpx;
  margin-right: 10rpx;
}
.user-info {
  width: 100%;
  padding: 20rpx;
  background-color: white;
  box-sizing: border-box;
  margin-top: 20rpx;
  box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.3);
  display: flex;
}
.user-text-info {
  margin-left: 20rpx;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.text-info-top {
  display: flex;
  height: 50%;
  align-items: center;
  color: #212121;
  font-size: 24rpx;
}
.text-info-bottom {
  height: 50%;
  color: #616161;
  font-size: 22rpx;
}
.action {
  position: absolute;
  bottom: 0rpx;
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
}
</style>

