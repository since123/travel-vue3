<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
  },
}
</script>
<style lang="stylus" scoped>
.item-title {
  overflow: hidden;
  position: relative;
  line-height: 2rem;
  font-size: 0.9rem;
  padding: 0 1rem;
}

.item-title-icon {
  position: relative;
  left: 0rem;
  top: 0.8rem;
  display: inline-block;
  width: 1.5rem;
  height: 2rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 0.29rem no-repeat;
  margin-right: 0.1rem;
  background-size: 1.5rem 11.25rem;
}

.item-children {
  padding: 0 1rem;
}
</style>
