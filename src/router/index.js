import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/view/home/Home.vue")
  }, {
    path: '/city',
    name: 'City',
    component: () => import("@/view/city/City.vue")
  }, {
    // 定义动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: () => import("@/view/detail/Detail.vue")
  }
]

const router = createRouter({
  history: createWebHistory(""),
  routes,
  // 每次进入新页面时让其开始位置为90,0)
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

// export default new Router({

//   // 每次进入新页面时让其开始位置为90,0)
//   scrollBehavior(to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   }
// })
