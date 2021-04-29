<template>
  <div>
    <nav-bar>
      <template v-slot:default>图书兄弟</template>
    </nav-bar>

    <div class="banner">
      <img src="~assets/images/banner2.jpg" alt="">
    </div>

    <recommend-view :recommends="recommends"></recommend-view>
    <!-- <div>{{recommends}}</div> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from 'views/home/childcomps/RecommendView'
import { getHomeAllData } from 'network/home'
import { ref, onMounted } from 'vue'

export default {
  setup () {
    const recommends = ref([])
    onMounted(async () => {
      const res = await getHomeAllData()
      // console.log(res.goods)
      recommends.value = res.goods.data
      // console.log(recommends)
    })
    return {
      recommends
    }
  },
  components: {
    NavBar,
    RecommendView
  }
}
</script>

<style lang="scss" scoped>
.banner img{
  margin-top: 45px;
  width: 100%;
  height: 100%;
}
</style>
