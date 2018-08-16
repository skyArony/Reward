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
    margin-left 20rpx

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
          font-size 28rpx
          font-weight 700
        
        .tipType
          color #9e9e9e
          font-size 26rpx
          margin-left 10rpx

      .infoTopRight
        color #9e9e9e
        font-size 20rpx

    .msgText
      color #757575
      font-size 28rpx
      font-weight 400
</style>