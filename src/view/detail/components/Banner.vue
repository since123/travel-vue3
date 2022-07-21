<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="武汉海昌极地海洋公园" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe612;</span>
          {{bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs" v-show="showGallery" @close="handleGallaryClick"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from '@/common/gallary/Gallary.vue'
import FadeAnimation from '@/common/fade/FadeAnimation.vue'
import { ref } from 'vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array,
  },
  components: {
    CommonGallary,
    FadeAnimation,
  },
  setup() {
    let showGallery = ref(false)
    let imgs = ref([])
    function handleBannerClick() {
      showGallery = true
    }
    function handleGallaryClick() {
      showGallery = false
    }
    return { showGallery, imgs, handleBannerClick, handleGallaryClick }
  },
}
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 1rem;
  color: #fff;
  background-image: liner-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  .banner-title {
    flex: 1;
    font-size: 0.9rem;
    padding: 0 0.3rem;
  }

  .banner-number {
    padding: 0 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.8);

    .banner-icon {
      padding-right: 0.4rem;
    }
  }
}
</style>
