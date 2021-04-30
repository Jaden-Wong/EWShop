<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, i) in titles" :key="i" @click="itemClick(i)" :class="{ active:i == currentIndex }">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props, { emit }) {
    const currentIndex = ref(0)
    const itemClick = (i) => {
      // console.log(i)
      currentIndex.value = i
      emit('tabClick', i)
    }
    return {
      currentIndex,
      itemClick
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: var(--font-size);
  background-color: #fff;
  position: sticky;
  top: 44px;
  z-index: 10;
  .tab-control-item{
    flex: 1;
    span{
      padding: 5px;
    }
  }
  .active{
    color: var(--color-high-text);
    span{
      border-bottom: 3px solid var(--color-high-text);
    }
  }
}
</style>
