<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'HomeHeader',
  setup() {
    const store = useStore()
    const city = store.state.city
    return { city }
  },
}
</script>

<style lang="stylus" scoped>
@import '../src/assets/styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background-color: $bgColor;

  .header-left {
    width: 3rem;

    .back-icon {
      text-align: center;
      color: #fff;
    }
  }

  .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: 0.5rem;
    margin-top: 0.25rem;
    margin-left: 0.2rem;
    padding-left: 0.6rem;
    height: 2rem;
    line-height: 2rem;
    color: #ccc;
    font-size: 12px;

    .iconfont {
      font-size: 14px;
    }
  }

  .header-right {
    min-width: 4rem;
    padding: 0 0.5rem;
    font-size: 0.9rem;
    color: #fff;
    float: right;
    text-align: center;
  }
}
</style>
