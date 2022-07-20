<template>
  <div>
    <div class="title">热销推荐</div>
    <ul style="padding:0">
      <router-link
        tag="li"
        class="item border bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="景点图片" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
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

.item {
  overflow: hidden;
  display: flex;
  height: 7rem;

  .item-img {
    height: 6rem;
    width: 6rem;
    padding: 0.5rem;
  }

  .item-info {
    flex: 1;
    padding: 0.5rem;
    min-width: 0;

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

    .item-button {
      font-size: 0.7rem;
      margin-top: 0.2rem;
      line-height: 1.2rem;
      background: #ff9300;
      padding: 0 0.1rem;
    }
  }
}
</style>
