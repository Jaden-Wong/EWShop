<template>
  <router-view></router-view>
  <div id="nav">
    <router-link to="/" class="tab-bar-item">
      <div>
        <div class="icon"><i class="iconfont icon-shouye"></i></div>
        <div>首页</div>
      </div>
    </router-link>
    <router-link to="/category" class="tab-bar-item">
      <div>
        <div class="icon"><i class="iconfont icon-fenlei-"></i></div>
        <div>分类</div>
      </div>
    </router-link>
    <router-link to="/shopcart" class="tab-bar-item">
      <div>
        <div class="icon"> <i class="iconfont icon-gouwuche"></i></div>
        <div>购物车</div>
      </div>
    </router-link>
    <router-link to="/profile" class="tab-bar-item">
      <div>
        <div class="icon"><i class="iconfont icon-wode"></i></div>
        <div>我的</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss">
@import '~assets/css/base.css';
@import '~assets/css/iconfont.css';

#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav{
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);

  a{
    // font-weight: bold;
    color: var(--color-text);
    &.router-link-exact-active{
      color: var(--color-high-text);
    }
  }

  .tab-bar-item{
    flex: 1;
    height: 50px;
    font-size: var(--font-size);
    .icon{
      width: 24px;
      height: 24px;
      margin-top: 5px;
      vertical-align: center;
      display: inline-block;
      // font-size: 24px;
    }
  }
}
</style>
