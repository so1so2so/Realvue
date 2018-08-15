// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //这里的状态和每个组件的数据属性有关系(data)
    alllist: [],
    note: {
      password: '',

    },
    count: 0
  },
  mutations: {
    //修改state用
    // increment (state) {
    //   state.count++
    // }
    GetAlldatas(state,data) {
          state.alllist=data
    },
    ChangePassword(state, data) {
      // mutations 方式
      // $.ajax({
      //   url: 'http://127.0.0.1:8000/api/v1/userinfo/',
      //   method: 'POST',
      //   dataType: 'json',
      //   data: json,
      //   // contentType: "application/x-www-form-urlencoded",
      //   success: function (data) {
      //     console.log(data);
      //     state.alllist = data
      //   },
      //   error: function (error) {
      //     console.log(error)
      //   }
      // })
    state.alllist = data
    }
  },
  actions: {
    getalldatas(context) {
      $.ajax({
        url: 'http://127.0.0.1:8000/api/v1/userinfo/',
        method: 'get',
        dataType: 'json',
        success: function (data) {
          // console.log(data);
          // console.log(this);
          context.commit('GetAlldatas',data)
          // state.alllist = data
          // console.log(_this.$store.state.alllist)
        }
      });

    },
    changepassword(context,return_data) {
      $.ajax({
        url: 'http://127.0.0.1:8000/api/v1/userinfo/',
        method: 'POST',
        dataType: 'json',
        data: return_data,
        // contentType: "application/x-www-form-urlencoded",
        success: function (rescive_data) {
          // console.log(data);
          context.commit('ChangePassword',rescive_data)
        },
        error: function (error) {
          // console.log(error)
        }
      })
    }
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  //挂载components
  components: {
    App: App
  },
  template: '<App/>'
})


