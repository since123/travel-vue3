<template>
  <div class="icons">
    <div class="title">景点门票</div>

    <!-- <swiper v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="景点门票" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>-->
    <swiper
      v-if="showSwiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="景点门票" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { computed } from 'vue'
export default {
  name: 'HomeIcons',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    list: Array,
  },
  setup(props) {
    const onSwiper = (swiper) => {}
    const onSlideChange = () => {}
    const pages = computed(() => {
      const pages = []
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    })
    const showSwiper = computed(() => props.list.length)
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, A11y],
      pages,
      showSwiper,
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../src/assets/styles/varibles.styl';
@import '../src/assets/styles/mixins.styl';

.swiper {
  padding-top: 10px;

  /deep/ .swiper-pagination-bullet-active {
    background: #00bcd4;
  }
}

.title {
  margin-top: 0.2rem;
  line-height: 2rem;
  background: #eee;
  text-indent: 2rem;
}

.icon {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 20%;

  .icon-img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 1rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 80%;
      width: 60%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: $darkTextColor;
    font-size: 0.4rem;
    ellipsis();
  }
}
</style>
