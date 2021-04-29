<template>
  <div class="home">
    <h3>this is home</h3>
    <img src="~assets/images/xishuoPHP.jpg" alt="">
    <img :src="imgsrc" alt="">
    <p>{{banner}}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getHomeAllData } from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      // 使用文件路径别名引入文件
      imgsrc: require('assets/images/xishuoPHP.jpg')
    }
  },
  setup () {
    const banner = ref([])
    onMounted(async () => {
      const res = await getHomeAllData()
      banner.value = res.slides
    })
    return {
      banner
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base.css';

.title{
  color: var(--color-high-text)
}
</style>
