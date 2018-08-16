<template>
  <div class="container">
    <radio-group class="input-row"
                 @change="changeRadio">
      <div class="input-header">
        类型
      </div>
      <div class="input-content radio-content">
        <label>
          <radio value="功能广场"
                 color="#2d8cf0"
                 checked/>功能广场</label>
        <label>
          <radio value="区域广场"
                 color="#2d8cf0" />区域广场</label>
      </div>
    </radio-group>
    <div class="input-row">
      <div class="input-header">
        名称
      </div>
      <input class="input-content"
             maxlength="4"
             placeholder="给你的广场取一个名字吧" />
    </div>
    <div class="input-row">
      <div class="input-header">
        描述
      </div>
      <input class="input-content"
             placeholder="广场需要一个描述" />
      <!-- <textarea class="input-content"  auto-height placeholder="广场需要一个描述" /> -->
    </div>
    <div class="input-row image-row">
      <div class="input-header">
        头像
      </div>
      <div class="imgSelect">
        <image class="add"
               mode="aspectFill"
               src="/static/add2.png"></image>
      </div>
    </div>
    <div class="input-row image-row">
      <div class="input-header">
        背景
      </div>
      <div class="imgSelect">
        <image class="add"
               mode="aspectFill"
               src="/static/add2.png"></image>
      </div>
    </div>
    <div v-if="setVisible == '功能广场'"
         class="input-row">
      <div class="row-item">
        <div class="input-header">
          多人揭榜
        </div>
        <switch />
      </div>
      <div class="row-item">
        <div class="input-header">
          线上广场
        </div>
        <switch />
      </div>
    </div>
    <div class="action">
      <button type="primary"
              @click="ToSquare">创建</button>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      setVisible: '功能广场'
    }
  },
  methods: {
    changeRadio: function(data) {
      this.setVisible = data.target.value
    },
    ToSquare: function(data) {
      const url = '../square/main'
      wx.redirectTo({ url })
    }
  }
}
</script>


<style lang="stylus" scoped>
.input-header
  font-size 26rpx
  color #212121

.input-content
  flex-grow 1
  font-size 26rpx
  color #212121
  margin-left 30rpx

.add
  width 65rpx
  height 65rpx

.action
  position absolute
  bottom 0rpx
  width 100%
  padding 20rpx
  box-sizing border-box

.container
  display flex
  flex-direction column

  .input-row
    width 100%
    padding 20rpx 30rpx
    box-sizing border-box
    background-color white
    display flex
    align-items baseline

    + .input-row
      border-top 1rpx solid #eeeeee

    label
      margin-right 50rpx

    switch
      margin-left 30rpx

    .row-item
      display flex
      align-items baseline
      margin-right 50rpx

  .image-row
    display flex
    align-items center

    .imgSelect
      width 100rpx
      height 100rpx
      background-color #f5f5f5
      display flex
      justify-content center
      align-items center
      margin-left 30rpx
</style>


<style scoped>
/* .bottomPicker {
  box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.3);
  width: 100%;
  padding: 30rpx;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 15rpx;
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
}
.topinput {
  width: 100%;
  box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.3);
  background-color: white;
  margin-bottom: 15rpx;
  padding-bottom: 15rpx;
}
.imgSelect {
  padding: 20rpx;
}
.imgSelect-in {
  width: 100rpx;
  height: 100rpx;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.time-postion {
  font-size: 24rpx;
  color: #80848f;
  padding: 0 20rpx;
  box-sizing: border-box;
}
picker {
  font-size: 26rpx;
  color: #495060;
}
.center {
  width: 100%;
  box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.3);
  background-color: white;
  margin-bottom: 15rpx;
}
hr {
  height: 2rpx;
  background-color: #f5f5f5;
}
.action {
  position: absolute;
  bottom: 0rpx;
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
}
.add {
  width: 65rpx;
  height: 65rpx;
} */
</style>

