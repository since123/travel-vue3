<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '@/view/city/components/Header.vue'
import CitySearch from '@/view/city/components/Search.vue'
import CityList from '@/view/city/components/List.vue'
import CityAlphabet from '@/view/city/components/Alphabet.vue'
import { onMounted, ref } from 'vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },

  setup() {
    const { letter, handleLetterChange } = useLetterLogic()
    const { cities, hotCities } = useCityLogic()
    console.log('letter3', letter)

    return { letter, hotCities, cities, handleLetterChange }
  },
}
function useCityLogic() {
  const cities = ref({})
  const hotCities = ref([])
  async function getCityInfo() {
    await axios.get('http://localhost:3000/city').then((res) => {
      if (res.data) {
        const data = res.data
        cities.value = data.cities
        hotCities.value = data.hotCities
      }
    })
  }
  onMounted(() => getCityInfo())
  return { cities, hotCities }
}
function useLetterLogic() {
  let letter = ref('')
  function handleLetterChange(newletter) {
    letter.value = newletter
  }
  console.log('letter2', letter)

  return { letter, handleLetterChange }
}
</script>
<style lang="stylus" scoped></style>
