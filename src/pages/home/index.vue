<template>
  <div class="container">
    <div class="top-nav">
      <div v-if="!isSearch"
           class="nav-normal">
        <i-icon class="user"
                type="mine"
                size="36"
                color="#80848f" />
        <i-tabs class="nav"
                :current="current"
                @change="tabChange">
          <i-tab key="tab1"
                 title="江湖"></i-tab>
          <i-tab key="tab2"
                 title="个人"></i-tab>
        </i-tabs>
        <i-icon class="search"
                type="search"
                size="36"
                color="#80848f"
                @click="startSearch" />
      </div>
      <div v-else
           class="nav-search">
        <input class="search-input"
               placeholder="搜索悬赏令"
               confirm-type="search"
               auto-focus/>
        <button class="search-close"
                size="mini"
                plain="true"
                @click="closeSearch">取消</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isSearch: false,
      current: "tab1"
    };
  },
  methods: {
    closeSearch() {
      this.isSearch = false;
    },
    startSearch() {
      this.isSearch = true;
    },
    tabChange(detail) {
      this.current = detail.target.key;
    }
  }
};
</script>


<style scoped>
image {
  width: 26px;
  height: 26px;
}
.top-nav {
  width: 100%;
  height: 76rpx;
}
.nav-normal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
}
.nav-search {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.search-input {
  font-size: 22rpx;
  background-color: white;
  padding-left: 15rpx;
  margin-right: 15rpx;
  flex-grow: 20;
}
.search-close {
  flex-grow: 1;
  font-size: 22rpx;
  background-color: white;
}
.user,
.search {
  text-align: center;
  width: 12%;
}
.nav {
  width: 76%;
  height: 100%;
  font-size: 32rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-item {
  height: 100%;
  padding: 0 40rpx;
  align-items: center;
  border-bottom: solid 4rpx transparent;
  display: flex;
  justify-content: center;
}
</style>
