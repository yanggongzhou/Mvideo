import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/virtual'
    },
    {
      path: '/',
      component: resolve => require(['@/components/video.vue'],resolve),
      children:[
        {
          path: '/virtual',
          name: 'virtual',
          component: resolve => require(['@/components/virtual.vue'],resolve),
        },
        {
          path: '/originality',
          name: 'originality',
          component: resolve => require(['@/components/originality.vue'],resolve),
        },
        {
          path: '/ip',
          name: 'ip',
          component: resolve => require(['@/components/ip.vue'],resolve),
        }
      ]
    }
  ]
})
