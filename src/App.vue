<template>
  <div id="app">
    <heads></heads>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import $ from 'jquery'
  import heads from './components/Vheader'
export default {
  name: 'App',
  components:{
    heads
  },
  //页面加载完毕后,在这里请求数据
  mounted(){
     var _this=this;
      $.ajax({
        url:'http://127.0.0.1:8000/api/v1/userinfo/',
        methods:'get',
        dataType: 'json',
        success:function (data) {
          // console.log(data);
          _this.$store.state.alllist=data
          console.log(_this.$store.state.alllist)

        }
      })
  }
}
</script>

<style scoped>
</style>
