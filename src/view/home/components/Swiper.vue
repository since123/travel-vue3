<template>
  <div class="wrapper">
    <!-- <swiper v-if="showSwiper">
    
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>-->
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      autoplay
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed } from 'vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay' //自动播放模块所需的样式
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: Array,
  },
  setup() {
    const onSwiper = (swiper) => {}
    const onSlideChange = () => {}
    const showSwiper = computed(() => props.list.length)

    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
      showSwiper,
    }
  },
}
</script>

<style lang="stylus" scoped>
.swiper {
  /deep/ .swiper-pagination-bullet-active {
    background: #00bcd4;
  }
}

.swiper-slide {
  height: 210px;

  .swiper-img {
    height: 100%;
  }
}
</style>
