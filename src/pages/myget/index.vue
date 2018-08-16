<template>
  <div>
    <mlist v-for="item in TaskGet"
           :title="item.title"
           :desc="item.desc"
           :reward="item.reward"
           :square="item.square"
           :area="item.area"
           :status="item.status"
           :img="item.img"></mlist>
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
    // 下方 list
    TaskGet: function() {
      let tempList = TaskList.filter(function(item) {
        return (item.status.text === '待完成' || item.status.text === '已完成')
      })

      return tempList.sort(() => {
        return Math.random() > 0.5 ? -1 : 1
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.mlist
  width 100%
  margin-top 15rpx
  background-color white
  border-bottom 1rpx solid #eeeeee
</style>

