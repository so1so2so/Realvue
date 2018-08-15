// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    alllist:[],
    note:{
      password:'',

    },
    count: 0
  },
  mutations: {
    //修改state用
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  //挂载components
  components: {
    App:App },
  template: '<App/>'
})


