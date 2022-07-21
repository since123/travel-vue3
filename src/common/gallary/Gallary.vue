<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        autoplay
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay' //自动播放模块所需的样式
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props, context) {
    const onSwiper = (swiper) => {}
    const onSlideChange = () => {}
    function handleGallaryClick() {
      context.emit('close')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
      handleGallaryClick,
    }
  },
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;

    .gallery-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -5rem;
    }
  }
}
</style>
