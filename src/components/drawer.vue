<template>
  <div class="Ldrawer">
    <div class="user-info">
      <div class="userInfo-left">
        <div class="userInfo-img">
          <image class="headerImg"
                 mode="aspectFit"
                 src="https://i.loli.net/2017/08/21/599a521472424.jpg"></image>
        </div>
        <div class="userInfo-name">
          <font>我是一个大侠</font>
        </div>
        <div class="userInfo-tag">
          <i-tag class="i-tags"
                 name="龙门镖局"
                 color="yellow">
            龙门镖局 • 一级镖师
          </i-tag>
          <i-tag class="i-tags"
                 name="龙门镖局"
                 color="yellow">
            博物学会 • 长老
          </i-tag>
        </div>
      </div>
      <div class="userInfo-right">
      </div>
    </div>
    <div class="info-list">
      <div class="list-item"
           @click="ToMsg">
        <div class="listItem-icon">
          <image class="itemImg"
                 mode="aspectFit"
                 src="/static/message.png"></image>
        </div>
        <div class="listItem-text">
          江湖小道消息
        </div>
      </div>
      <div class="list-item"
           @click="ToMypublish">
        <div class="listItem-icon">
          <image class="itemImg"
                 mode="aspectFit"
                 src="/static/publish.png"></image>
        </div>
        <div class="listItem-text">
          发布的悬赏令
        </div>
      </div>
      <div class="list-item"
           @click="ToMyget">
        <div class="listItem-icon">
          <image class="itemImg"
                 mode="aspectFit"
                 src="/static/list.png"></image>
        </div>
        <div class="listItem-text">
          揭下的悬赏令
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ToMsg() {
      const url = '../message/main'
      wx.navigateTo({ url })
    },
    ToMypublish() {
      const url = '../mypublish/main'
      wx.navigateTo({ url })
    },
    ToMyget() {
      const url = '../myget/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style scoped>
.Ldrawer {
  width: 600rpx;
  height: 1218rpx;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.user-info {
  width: 100%;
  height: 300rpx;
  background-image: url("http://static.yfree.cc/img/other/header3.jpg");
  background-size: cover;
}
.Ldrawer::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 300rpx;
  background-color: #0000002e;
}
.user-info {
  display: flex;
}
.userInfo-left {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
}
.userInfo-right {
  flex-grow: 1;
}
.userInfo-img {
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 20rpx;
  z-index: 8;
}
.userInfo-name {
  flex-grow: 1;
  color: white;
  font-size: 34rpx;
  margin-left: 20rpx;
  z-index: 8;
}
.userInfo-tag {
  flex-grow: 1;
  margin-left: 20rpx;
  z-index: 8;
}
.headerImg {
  height: 120rpx;
  width: 120rpx;
  border-radius: 60rpx;
}
.i-tags {
  margin-right: 15rpx;
}
.info-list {
  display: flex;
  flex-direction: column;
}
.list-item {
  width: 100%;
  height: 112rpx;
  display: flex;
  padding: 40rpx 40rpx 0 40rpx;
  box-sizing: border-box;
}
.itemImg {
  width: 45rpx;
  height: 45rpx;
}
.listItem-text {
  flex-grow: 4;
  font-size: 32rpx;
  color: #212121;
}
.listItem-icon {
  flex-grow: 1;
}
</style>
