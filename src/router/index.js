import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@c/Main/index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => require.ensure([], () => resolve(require('@/views/Home/index.vue')) , 'Multichain-index')
    // meta: {
    //   notCache: true
    // },
    // children: [
    //   {
    //     path: '/',
    //     meta: {
    //       label: 'home',
    //       isViewNav: 1
    //     },
    //     component: resolve => require.ensure([], () => resolve(require('@/views/Home/index.vue')) , 'Multichain-index')
    //   }
    // ]
  },
  {
    path: '/swap',
    component: resolve => require.ensure([], () => resolve(require('@/views/Swap/index.vue')) , 'Multichain-index')
  //   meta: {
  //     notCache: true
  //   },
  //   children: [
  //     {
  //       path: '/',
  //       meta: {
  //         label: 'home',
  //         isViewNav: 1
  //       },
  //       component: resolve => require.ensure([], () => resolve(require('@/views/Swap/index.vue')) , 'Multichain-index')
  //     }
  //   ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
