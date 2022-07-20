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
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, onMounted, watch, ref } from 'vue'
export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },

  setup(props) {
    const keyword = ref('')
    const list = ref([])
    let timer = null
    const router = useRouter()
    let scroll = null
    let search = ref(null)
    function handleCityClick(city) {
      changeCity(city)
      store.commit('changeCity', city)
      router.push('/')
    }
    watch(
      () => props.keyword,
      (keyword, preKeyword) => {
        if (timer) {
          clearTimeout(this.timer)
        }
        if (!keyword) {
          list = []
          return
        }
        timer = setTimeout(() => {
          const result = []
          for (let i in cities) {
            cities[i].forEach((value) => {
              if (
                value.spell.indexOf(keyword) > -1 ||
                value.name.indexOf(keyword) > -1
              ) {
                result.push(value)
              }
            })
          }
          list = result
        }, 100)
      }
    )
    onMounted(() => {
      scroll = new Bscroll(search.value, { click: true })
    })
    const hasNoData = computed(() => {
      return !list.length
    })
    return { keyword, list, search, handleCityClick, hasNoData }
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
