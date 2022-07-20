<template>
  <div>
    <!-- keep-alive 表示执行过一次之后会把该路由放在内存中，下次执行不需要重新加载 -->
    <!-- <keep-alive exclude="Detail"> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
