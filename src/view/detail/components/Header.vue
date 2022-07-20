<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-abs">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<!-- @import '~styles/varibles.styl' -->
<style lang="stylus" scoped>
.header-abs {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.4rem;

  .header-abs-back {
    color: #fff;
  }
}

.header-fixed {
  z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background: $bgColor;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  font-size: 0.9rem;

  .header-fixed-back {
    position: absolute;
    width: 2.5rem;
    text-align: center;
    top: -1rem;
    left: 0;
    color: #fff;
  }
}
</style>
