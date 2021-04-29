<template>
  <div class="nav-bar">
    <div class="left" @click="goback"><slot name="left">
      <img src="~assets/images/left.png"></slot></div>
    <div class="center"><slot>EWShop</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const goback = () => {
      router.go(-1)
    }
    return {
      goback
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: var(--color-high-text);
  height: 45px;
  line-height: 45px;
  color: #fff;
  box-shadow: 0 2px 0 rgba(100, 100, 100, 0.1);
  .left,.right{
    width: 60px;
  }
  .left img{
    width: 45px;
    padding: 12px;
  }
  .center{
    flex: 1;
  }
}
</style>
