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
    <div class="page-body">
      <div class='page-in'
           style="background-color: #f5f5f5"
           v-if="page == 'jh' && isSearch == false">
        <div class="block">
          <div class="block-item">
            <i-icon class="block-icon"
                    type="computer"
                    size="42"
                    color="#80848f"
                    @click="startSearch" />
            <div>线上</div>
          </div>
          <div class="block-item">
            <i-icon class="block-icon"
                    type="coordinates"
                    size="42"
                    color="#80848f"
                    @click="startSearch" />
            <div>线下</div>
          </div>
          <div class="block-item">
            <i-icon class="block-icon"
                    type="flag"
                    size="42"
                    color="#80848f"
                    @click="startSearch" />
            <div>跑腿</div>
          </div>
        </div>
        <div class="list"></div>
        <div class="publish">
          <div class="publish-icon-block">
            <div class="public-icon-in">
              <i-icon class="public-icon"
                      type="add"
                      size="39"
                      color="#fff"
                      @click="startSearch" />
            </div>
          </div>
        </div>
      </div>
      <div class='page-in'
           v-else-if="page == 'gr' && isSearch == false">
        个人
      </div>
      <div class='page-in'
           v-else-if="isSearch == true">
        <div class="block-tag">
          <i-tag class="i-tags"
                 name="跑腿"
                 type='border'
                 color="red">
            跑腿
          </i-tag>
          <i-tag class="i-tags"
                 name="修电脑"
                 type='border'
                 color="default">
            修电脑
          </i-tag>
          <i-tag class="i-tags"
                 name="教作图"
                 type='border'
                 color="default">
            教作图
          </i-tag>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isSearch: false,
      current: "tab1",
      page: "jh"
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
      if (this.current == "tab1") this.page = "jh";
      else if (this.current == "tab2") this.page = "gr";
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
  z-index: 1;
}
.nav-normal {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(150,150,150,.3);
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
.page-body {
  width: 100%;
}
.page-in {
  width: 100%;
}
.block {
  padding: 30rpx;
  display: flex;
  justify-content: center;
  background-color: white;
}
.block-item {
  margin: 0 30rpx;
  display: flex;
  flex-direction: column;
  font-size: 24rpx;
  text-align: center;
  color: #80848f;
}
.list {
  width: 100%;
  margin-top: 15rpx;
  height: 200rpx;
  background-color: white;
}
.block-tag {
  padding: 30rpx;
}
.i-tags {
  margin-right: 20rpx;
}
.publish {
  width: 100rpx;
  height: 180rpx;
  position: absolute;
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -50rpx;
  border-top-left-radius: 50rpx;
  border-top-right-radius: 50rpx;
  box-shadow: 0px 1px 10px rgba(150,150,150,.3);
}
.publish-icon-block {
  width: 100%;
  height: 100rpx;
  border-top-left-radius: 50rpx;
  border-top-right-radius: 50rpx;
  text-align: center;
}
.public-icon-in {
  margin: 15rpx;
  width: 70rpx;
  height: 70rpx;
  background-color: red;
  border-radius: 35rpx;
}
.public-icon {
  width: 39rpx;
  height: 39rpx;
}
</style>
