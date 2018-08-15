<template>
  <div class="msg-outer">
    <div class="headeImg">
      <image class="headerImg"
                 mode="aspectFit"
                 src="https://i.loli.net/2017/08/21/599a521472424.jpg"></image>
    </div>
    <div class="msgInfo">
      <div class="infoTop">
        <div class="infoTopLeft">
          <div class="userName">一个大侠</div>
          <div class="tipType">回复了你</div>
        </div>
        <div class="infoTopRight">一天前</div>
      </div>
      <div class="msgText">你好,关于您反馈的评论问题你好,关于您反馈的评论问题你好,关于您反馈的评论问题你好,关于您反馈的评论问题你好,关于您反馈的评论问题你好,关于您反馈的评论问题</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.msg-outer
  display flex
  padding 20rpx
  background-color white

  + .msg-outer
    border-top 1rpx solid #eeeeee

  .headerImg
    height 100rpx
    width 100rpx
    border-radius 50rpx

  .msgInfo
    display flex
    flex-direction column

    .infoTop
      display flex
      justify-content space-between
      margin-bottom 10rpx
      align-items baseline

      .infoTopLeft
        display flex
        align-items baseline

        .userName
          color #212121
          margin-left 10rpx
          font-size 26rpx
        
        .tipType
          color #757575
          font-size 24rpx
          margin-left 5rpx

      .infoTopRight
        color #757575
        font-size 20rpx

    .msgText
      color #757575
      margin-left 10rpx
      font-size 22rpx
</style>