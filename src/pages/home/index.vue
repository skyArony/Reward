<template>
  <div class="container">
    <!-- top-栏 -->
    <div class="top-nav">
      <div v-if="!isSearch"
           class="nav-normal">
        <i-icon class="user"
                type="mine"
                size="36"
                color="#80848f"
                @click="drawerController" />
        <i-tabs class="nav"
                :current="current"
                @change="tabChange">
          <i-tab key="explore"
                 title="发现"></i-tab>
          <i-tab key="online"
                 title="线上"></i-tab>
          <i-tab key="offline"
                 title="线下"></i-tab>
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
    <!-- !top-栏 -->
    <div class="page-body">
      <div class='page-in'
           style="background-color: #f5f5f5"
           v-if="page == 'explore' && isSearch == false">
        <div class="block">
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙门镖局"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
        </div>
        <div class="list"></div>
      </div>
      <div class='page-in'
           v-else-if="page == 'online' && isSearch == false">
        <div class="block">
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙门镖局"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="1234567"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
        </div>
      </div>
      <div class='page-in'
           v-else-if="page == 'offline' && isSearch == false">
        <div class="block">
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
          <div class="block-item"
               :style="img">
            <div class="blockItem-mask"></div>
            <div class="blockItem-title">帮我带个东西</div>
            <div class="blockItem-tag">
              <tag text="龙"
                   color="#2d8cf0"
                   fontSize="19rpx"></tag>
            </div>
          </div>
        </div>
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
      <div class="publish">
        <div class="publish-icon-block">
          <div class="public-icon-in">
            <i-icon class="public-icon"
                    type="add"
                    size="39"
                    color="#fff"
                    @click="ToAddTask" />
          </div>
        </div>
      </div>
    </div>
    <!-- 侧边抽屉 -->
    <div class="drawer">
      <i-drawer mode="left"
                :visible="drawerVisible"
                @close="drawerController">
        <drawer text="motto"></drawer>
      </i-drawer>
      <!-- !侧边抽屉 -->
    </div>
  </div>
</template>


<script>
import drawer from "@/components/drawer";
import tag from "@/components/tag";

export default {
  components: {
    drawer,
    tag
  },
  data() {
    return {
      isSearch: false,
      current: "explore",
      page: "explore",
      drawerVisible: false,
      img:
        "background-size: cover;background-image: url('https://i.loli.net/2017/08/21/599a521472424.jpg')"
    };
  },
  methods: {
    ToAddTask() {
      const url = "../publish/main";
      wx.navigateTo({ url });
    },
    closeSearch() {
      this.isSearch = false;
    },
    startSearch() {
      this.isSearch = true;
    },
    tabChange(detail) {
      this.current = detail.target.key;
      if (this.current == "explore") this.page = "explore";
      else if (this.current == "online") this.page = "online";
      else if (this.current == "offline") this.page = "offline";
    },
    drawerController() {
      this.drawerVisible = !this.drawerVisible;
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
  box-shadow: 0px 2px 10px rgba(150, 150, 150, 0.3);
  background-color: white;
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
  background-color: white;
}
.block-item {
  margin-right: 20rpx;
  width: 125rpx;
  height: 125rpx;
  background-color: aqua;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  font-size: 24rpx;
  text-align: center;
  color: #80848f;
  overflow: hidden;
}
.blockItem-title {
  flex-grow: 2;
  padding: 15rpx 15rpx 0rpx 15rpx;
  color: white;
  text-align: left;
  font-size: 22rpx;
  z-index: 1;
}
.blockItem-tag {
  flex-grow: 1;
  padding: 5rpx 15rpx 15rpx 15rpx;
  z-index: 1;
  display: flex;
}
.blockItem-mask {
  width: 125rpx;
  height: 125rpx;
  border-radius: 20rpx;
  background-color: #0000002e;
  position: absolute;
  z-index: 0;
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
  box-shadow: 0px 1px 10px rgba(150, 150, 150, 0.3);
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

<style>
.blockItem-i-tag::shadow .i-tag {
  font-size: 19rpx;
}
</style>
