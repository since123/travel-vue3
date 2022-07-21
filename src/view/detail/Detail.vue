<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from '@/view/detail/components/Banner.vue'
import DetailHeader from '@/view/detail/components/Header.vue'
import DetailList from '@/view/detail/components/List.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  setup() {
    let sightName = ref('')
    let bannerImg = ref('')
    let gallaryImgs = ref([])
    let list = ref([])
    const route = useRoute()
    async function getDetailInfo() {
      let res = await axios.get('http://localhost:3000/detail', {
        params: {
          id: route.params.id,
        },
      })
      console.log('data', res)
      if (res && res.data) {
        const data = res.data
        sightName.value = data.sightName
        bannerImg.value = data.bannerImg
        gallaryImgs.value = data.gallaryImgs
        list.value = data.categoryList
      }
    }
    onMounted(() => {
      getDetailInfo()
    })
    return { sightName, bannerImg, gallaryImgs, list }
  },
}
</script>
<style lang="stylus" scoped>
.content {
  height: 80rem;
}
</style>
