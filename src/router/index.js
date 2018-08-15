import Vue from 'vue'
import Router from 'vue-router'
import Vmain from '@/components/Vmain'
import Vnote from '@/components/note/Vnote'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain,
    },
    {
      path: '/note',
      name: 'Vnote',
      component: Vnote,
    },

  ]
})
