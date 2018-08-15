<template>
  <div class="container">
    <div class="topinput">
      <i-input class="input"
               :value="title"
               title="标题"
               autofocus
               maxlength="18"
               placeholder="不超过18个字" />
      <i-input class="input"
               :value="desc"
               type="textarea"
               title="描述"
               placeholder="描述一下吧..."
               maxlength="200" />
      <div class="imgSelect">
        <div class="imgSelect-in">
          <image class="add"
                 mode="aspectFill"
                 src="/static/add2.png"></image>
        </div>
      </div>
      <div class="time-postion">
        <font>明基商务广场</font>
      </div>
    </div>
    <div class="center">
      <i-input :value="money"
               type="number"
               right
               title="悬赏金 $"
               mode="wrapped"
               placeholder="最少 0.01 元" />
    </div>
    <div class="bottomPicker">
      <picker @change="tagPicker"
              :value="index"
              :range="tags">
        <view class="picker"
              style="margin-bottom:20rpx">
          悬赏类别:&nbsp;&nbsp;{{tags[tagIndex]}}
        </view>
      </picker>
      <hr />
      <picker @change="ttlPicker"
              :value="index"
              :range="ttl">
        <view class="picker"
              style="margin-top:20rpx">
          有效时间:&nbsp;&nbsp;{{ttl[ttlIndex]}}
        </view>
      </picker>
    </div>
    <div class="action">
      <button type="primary">发布</button>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      title: '',
      desc: '',
      money: 0.01,
      tags: ['龙门镖局', '重金求画', '一码千金', '博物学会'],
      ttl: ['12小时', '24小时', '三天', '七天', '十天'],
      tagIndex: 0,
      ttlIndex: 0
    }
  },
  methods: {
    pickerChange: function(data) {
      console.log(data)
    }
  }
}
</script>




<style scoped>
.bottomPicker {
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
}
</style>

