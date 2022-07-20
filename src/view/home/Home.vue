<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from '@/view/home/components/Header.vue'
import HomeSwiper from '@/view/home/components/Swiper.vue'
import HomeIcons from '@/view/home/components/Icons.vue'
import HomeRecommend from '@/view/home/components/Recommend.vue'
import HomeWeekend from '@/view/home/components/Weekend.vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
// import { toRaw } from '@vue/reactivity'

export default {
  name: 'Home',
  setup() {
    const swiperList = ref([])
    const iconList = ref([])
    const recommendList = ref([])
    const weekendList = ref([])
    const store = useStore()
    const city = store.state.city
    async function getHomeInfo() {
      let res = await axios.get('http://localhost:3000/data?city=' + city)
      console.log('res', res)
      if (res.data) {
        let result = res.data
        swiperList.value = result.swiperList
        iconList.value = result.iconList
        recommendList.value = result.recommendList
        weekendList.value = result.weekendList
        // console.log('swiperList', swiperList.value)
      }
    }

    onMounted(() => {
      getHomeInfo()
    })
    return { swiperList, iconList, recommendList, weekendList }
  },

  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
}
</script>
<style></style>
