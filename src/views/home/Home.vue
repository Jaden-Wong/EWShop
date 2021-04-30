<template>
  <div id="home">
      <nav-bar>
        <template v-slot:default>图书兄弟</template>
      </nav-bar>

    <div class="wrapper">
      <div class="content">
        <div class="banner">
          <img src="~assets/images/banner2.jpg" alt="">
        </div>

        <recommend-view :recommends="recommends"></recommend-view>

        <tab-control :titles="['畅销', '新书', '精选']" @tabClick="tabClick"></tab-control>

        <goods :goods="showGoods"></goods>
      </div>
    </div>
  </div>
</template>

<script>
// 导入子组件
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from 'views/home/childcomps/RecommendView'
import TabControl from 'components/content/tabControl/TabControl'
import Goods from 'components/content/goods/Goods'
// 导入封装的网络请求的方法
import { getHomeAllData, getHomeGoods } from 'network/home'
// 按需导入vue3的方法
import { ref, reactive, onMounted, computed } from 'vue'

export default {
  setup () {
    const recommends = ref([])
    // 封装商品列表数据
    const goods = reactive({
      sales: { page: 0, list: [] },
      recommend: { page: 0, list: [] },
      new: { page: 0, list: [] }
    })

    // 当前选项卡
    const currentType = ref('sales')
    // 通过计算属性获取当前选项卡的商品列表
    const showGoods = computed(() => {
      return goods[currentType.value].list
    })
    // console.log(showGoods)

    onMounted(async () => {
      const res = await getHomeAllData()
      // console.log(res.goods)
      recommends.value = res.goods.data
      // console.log(recommends)

      // 获取选项卡对应的数据
      const res1 = await getHomeGoods('sales')
      goods.sales.list = res1.goods.data
      // console.log(res1)
      const res2 = await getHomeGoods('recommend')
      goods.recommend.list = res2.goods.data
      // console.log(res2)
      const res3 = await getHomeGoods('new')
      goods.new.list = res3.goods.data

      // console.log(res3)
      // console.log(goods)
    })

    const tabClick = (i) => {
      // console.log(i)
      const typeArr = ['sales', 'recommend', 'new']
      currentType.value = typeArr[i]
      console.log(currentType.value)
    }

    return {
      recommends,
      tabClick,
      goods,
      showGoods
    }
  },
  components: {
    NavBar,
    RecommendView,
    TabControl,
    Goods
  }
}
</script>

<style lang="scss" scoped>
#home{
  position: relative;
  height: 100vh;
  .wrapper{
    position: absolute;
    top: 0px;
    bottom: 50px;
    left: 0;
    right: 0;
    // overflow: hidden;
  }
}
.banner img{
  margin-top: 45px;
  width: 100%;
  height: 100%;
}
</style>
