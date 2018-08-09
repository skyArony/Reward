<template>
  <div class="my-tag" :style="{ backgroundColor: color }">
    <span :style="{ fontSize: fontSize, fontColor: fontColor }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: [
    "text",
    "color",
    "fontColor",
    "fontSize"
  ],
};
</script>

<style scoped>
.my-tag {
  display:inline-block;
  white-space: nowrap;
  line-height: 36rpx;
  padding:2rpx 12rpx;
  font-size: 22rpx;
  border-radius: 7rpx;
  box-sizing: border-box;
  color: white;
  display: flex;
  vertical-align:middle;
  align-items: center;
}
</style>
