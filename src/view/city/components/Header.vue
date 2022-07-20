<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
}
</script>
<style lang="stylus" scoped>
@import '../src/assets/styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  background: $bgColor;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;

  .header-back {
    position: absolute;
    width: 2.5rem;
    text-align: center;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>
