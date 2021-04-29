<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, i) in recommends.slice(0, 4)" :key="i">
      <a href="" @click.prevent="goD(item.id)">
        <img :src="item.cover_url">
        <div>{{item.title}}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup () {
    const router = useRouter()
    const goD = (id) => {
      router.push({ path: '/detail', query: { id } })
    }
    return {
      goD
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  display: flex;
  border-bottom: 8px solid #eee;
  font-size: 12px;
  .recommend-item{
    flex: 1;
    padding: 15px 0 20px;
    img{
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
    }
  }
}
</style>
