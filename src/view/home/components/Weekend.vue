<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul style="padding:0">
      <li class="item border bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="景点图片" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeenkend',
  props: {
    list: Array,
  },
}
</script>
<style lang="stylus" scoped>
@import '../src/assets/styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 2rem;
  background: #eee;
  text-indent: 2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 29.9%;
  background: red;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.5rem;

  .item-title {
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 0.9rem;
    ellipsis();
  }

  .item-desc {
    font-size: 0.5rem;
    line-height: 1.2rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
