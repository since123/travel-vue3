<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick (item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, onMounted, watch, ref, onUpdated } from 'vue'
export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },

  setup(props) {
    const keyword = ref('')
    const list = ref([])
    const search = ref(null)
    let timer = null
    const router = useRouter()
    const store = useStore()
    let scroll = null
    const hasNoData = computed(() => {
      !list.length
    })

    watch(
      () => keyword.value,
      (keyword, preKeyword) => {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        if (!keyword) {
          list.value = []
          return
        }
        timer = setTimeout(() => {
          const result = []
          for (let i in props.cities) {
            props.cities[i].forEach((value) => {
              if (
                value.spell.indexOf(keyword) > -1 ||
                value.name.indexOf(keyword) > -1
              ) {
                result.push(value)
              }
            })
          }
          list.value = result
        }, 100)
      }
    )
    function handleCityClick(city) {
      store.commit('changeCity', city)
      router.push('/')
    }
    onMounted(() => {
      scroll = new BScroll(search.value, { click: true })
    })
    // onUpdated(() => {
    //   scroll && scroll.refresh()
    // })
    return { keyword, list, search, hasNoData, handleCityClick }
  },
}
</script>
<style lang="stylus" scoped>
@import '../src/assets/styles/varibles.styl';

.search {
  height: 2.4rem;
  padding: 0 0.3rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    color: #666;
    box-sizing: border-box;
    border-radius: 0.2rem;
    border: none;
    font-size: 0.8rem;
  }
}

.search-content {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 4.9rem;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 2rem;
    padding-left: 1rem;
    color: #666;
    background: #fff;
    font-size: 0.8rem;
  }
}
</style>
