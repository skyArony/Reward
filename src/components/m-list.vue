<template>
  <div class="my-list"
       @click="ToTask">
    <div class="list-top">
      <div v-if="img"
           class="list-img"
           :style="{ backgroundImage: img }">
      </div>
      <div v-if="img"
           class="list-info"
           :style="">
        <div class="info-top">
          <div class="info-title">
            {{title}}
          </div>
          <div class="info-reward">￥ {{reward}}</div>
        </div>
        <div class="info-desc">
          {{desc}}
        </div>
      </div>
      <div v-else="img"
           class="list-info-s"
           :style="">
        <div class="info-top">
          <div class="info-title">
            {{title}}
          </div>
          <div class="info-reward">￥ {{reward}}</div>
        </div>
        <div class="info-desc">
          {{desc}}
        </div>
      </div>
    </div>
    <div class="list-bottom">
      <tag :text="square.text"
           :color="square.color"
           type="plain"></tag>
      <tag v-if="area"
           :text="area.text"
           :color="area.color"
           type="plain"></tag>
      <div class="right-icon">
        <tag v-if="status"
             :text="status.text"
             :color="status.color"></tag>
        <image v-else
               class="ellipsis"
               mode="aspectFill"
               src="/static/ellipsis.png"></image>
      </div>
    </div>
  </div>
</template>

<script>
import tag from '@/components/tag'

export default {
  components: {
    tag
  },
  props: ['title', 'desc', 'reward', 'img', 'status', 'square', 'area'],
  methods: {
    ToTask() {
      const url = '../task/main'
      wx.navigateTo({ url })
    }
  },
  onReady: function() {
    // console.log(this.square)
  }
}
</script>

<style lang="stylus" scoped>
.my-list
  width 100%
  padding 25rpx 25rpx 15rpx 25rpx
  box-sizing border-box
  display flex
  flex-direction column
  background-color white

  .list-top
    display flex
    height 120rpx

    .list-img
      height 120rpx
      width 120rpx
      margin-right 20rpx
      background-size cover
      border-radius 12rpx

    .list-info
      height 120rpx
      width 560rpx
      display flex
      flex-direction column

      .info-top
        width 100%
        display flex
        justify-content space-between
        margin-bottom 10rpx

        .info-title
          color #212121
          font-size 30rpx
          overflow hidden
          text-overflow ellipsis
          white-space nowrap

        .info-reward
          min-width 80rpx
          flex-shrink 0
          font-size 28rpx
          color red

      .info-left
        width 480rpx
        display flex
        padding-right 15rpx
        box-sizing border-box
        flex-direction column

      .info-desc
        width 100%
        color #757575
        font-size 25rpx
        display -webkit-box
        overflow hidden
        text-overflow ellipsis
        word-break break-all
        -webkit-box-orient vertical
        -webkit-line-clamp 2

  .list-bottom
    display flex
    align-items center
    margin-top 10rpx
    position relative

    .right-icon
      position absolute
      right 0

      .ellipsis
        width 28rpx
        height 28rpx

  + .my-list
    border-top 1rpx solid #eeeeee

.list-info-s
  height 120rpx
  width 100%
  display flex
  flex-direction column

  .info-top
    width 100%
    display flex
    justify-content space-between
    margin-bottom 10rpx

    .info-title
      width 100%
      color #212121
      font-size 30rpx
      overflow hidden
      text-overflow ellipsis
      white-space nowrap

    .info-reward
      min-width 80rpx
      flex-shrink 0
      font-size 28rpx
      color red

  .info-desc
    width 100%
    color #757575
    font-size 25rpx
    display -webkit-box
    overflow hidden
    text-overflow ellipsis
    word-break break-all
    -webkit-box-orient vertical
    -webkit-line-clamp 2
</style>

<style>
.list-bottom > .my-tag {
  margin-right: 10rpx;
}
</style>



