<template>
  <div class="list" ref="wrapper">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{currentCity}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div
          class="button-wrapper"
          v-for="item of hotCities"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="areaList">
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="elem => elems[key] = elem">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted, watch, ref } from 'vue'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const currentCity = store.state.city
    const elems = ref({})
    let scroll = null
    const wrapper = ref(null)
    function handleCityClick(city) {
      store.commit('changeCity', city)
      router.push('/')
    }
    watch(
      () => props.letter,
      (letter, preLetter) => {
        console.log('prop.letter', props.letter)
        if (letter) {
          console.log('xoihi')
          const element = elems.value[letter]
          scroll.scrollToElement(element)
        }
      },
      { deep: true }
    )
    onMounted(() => {
      scroll = new Bscroll(wrapper.value, { click: true })
    })
    return { currentCity, elems, wrapper, handleCityClick }
  },
}
</script>
<style lang="stylus" scoped>
@import '../src/assets/styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  height: 88vh;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 4.9rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 1.8rem;
    background: #eee;
    padding-left: 0.8rem;
    color: #666;
    font-size: 0.8rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.4rem 2rem 0.4rem 0.4rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        padding: 0.1rem 0;
        text-align: center;
        margin: 0.3rem;
        border: 0.05rem solid #ccc;
        border-radius: 0.3rem;
        font-size: 0.9rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 2.5rem;
      color: #666;
      padding-left: 0.8rem;
      font-size: 0.8rem;
    }
  }
}

.areaList {
  overflow: scroll;
}
</style>
