<template>
  <div class="square">
    <div class="square-top">
      <div class="topBg"></div>
      <div class="topMask"></div>
      <div class="topInfo">
        <div class="topInfoCenter">
          <div class="centerTitle">龙门镖局</div>
          <div class="centerDesc">有什么想要让帮忙代领的东西?快递,同城托运,送货上门,在这里都可以得到解决.</div>
        </div>
        <div class="topInfoBottom">
          <div class="fcousNum">2000 人关注</div>
          <div class="fcousBtn">关注</div>
        </div>
      </div>
    </div>
    <div class="square-bottom">
      <div class="list">
        <mlist v-for="item in Task"
               :title="item.title"
               :desc="item.desc"
               :reward="item.reward"
               :square="item.square"
               :area="item.area"
               :img="item.img"></mlist>
      </div>
    </div>
  </div>
</template>

<script>
import { TaskList } from '@/utils/mock'

import mlist from '@/components/m-list'

export default {
  components: {
    mlist
  },
  computed: {
    // list
    Task: function() {
      let tempList = TaskList.filter(function(item) {
        return item.square.text === '龙门镖局'
      })

      return tempList.sort(() => {
        return Math.random() > 0.5 ? -1 : 1
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.square
  display flex
  flex-direction column

  .square-top
    height 400rpx
    position relative

    .topBg
      position absolute
      height 100%
      width 100%
      background-color #00000061

    .topMask
      height 100%
      width 100%
      background-image url('https://img3.jiemian.com/101/original/20160720/146895390585460600_a580x330.jpg')
      background-size cover

    .topInfo
      position absolute
      top 0
      height 100%
      width 100%
      display flex
      justify-content center
      align-items center
      padding 30rpx
      box-sizing border-box

      .topInfoCenter
        display flex
        flex-direction column
        color white
        text-align center

        .centerTitle
          font-size 36rpx
          margin-bottom 10rpx

        .centerDesc
          font-size 28rpx

      .topInfoBottom
        width 100%
        position absolute
        padding 30rpx
        box-sizing border-box
        bottom 0
        display flex
        color white
        justify-content space-between
        align-items baseline

        .fcousNum
          font-size 20rpx

        .fcousBtn
          font-size 25rpx
          background-color #2d8cf0
          padding 5rpx 30rpx
          height 40rpx
          border-radius 40rpx
          line-height 40rpx
</style>

