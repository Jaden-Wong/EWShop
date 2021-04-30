<template>
  <div class="goods">
    <goods-item v-for="item in goods" :key="item.id" :product="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'

export default {
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>
