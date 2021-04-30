<template>
  <div class="goods-item">
    <img :src="product.cover_url" alt="">
    <div class="goods-info">
      <p>{{product.title}}</p>
      <span class="price"><small>￥</small>{{product.price}}</span>
      <span class="collect">{{product.collects_count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-item{
  width: 46%;
  padding-bottom: 30px;
  position: relative;
  img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  p{
    margin-bottom: 5px;
    padding: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    padding-right: 25px;
    color: red;
  }
  .collect{
    position: relative;
  }
  .collect::before{
    content: '';
    position: absolute;
    top: -1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url('~assets/images/collect.png') 0 0/14px 14px;
  }
}
</style>
