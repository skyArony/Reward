<template>
  <div class="my-tag"
       :class="[isNormal ? 'normal' : 'plain']"
       :style="{ backgroundColor: BackgroundColor, borderColor: BorderColor, color: FontColor }">
    <span :style="{ fontSize: FontSize }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ['text', 'color', 'fontSize', 'type'],
  data() {
    return {
      isNormal: true,
      BackgroundColor: '#039be5',
      BorderColor: '#039be5',
      FontColor: 'white',
      FontSize: '19rpx'
    }
  },
  computed: {
  },
  mounted: function() {
    this.BackgroundColor = this.color
    this.BorderColor = this.color

    if (this.fontSize) this.FontSize = this.fontSize

    if (this.type === 'normal') {
      this.isNormal = true
    } else if (this.type === 'plain') {
      this.isNormal = false
      this.BackgroundColor = 'white'
      this.FontColor = this.color
    }
  }
}
</script>

<style scoped>
.my-tag {
  height: 32rpx;
  padding: 2rpx 12rpx;
  font-size: 19rpx;
  border-radius: 7rpx;
  line-height: 2rpx;
  box-sizing: border-box;
  color: white;
  display: flex;
  vertical-align: middle;
  align-items: center;
}
.normal {
  
}
.plain {
  border-style: solid;
  border-width: 1px;
}
</style>
