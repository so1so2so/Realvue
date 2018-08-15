<template>
  <div id="app">
    <heads></heads>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'

  import heads from './components/Vheader'
export default {
  name: 'App',
  components:{
    heads
  },
  //页面加载完毕后,在这里请求数据
  mounted(){
          this.$store.commit('getAlldatas')
  }
}
</script>

<style scoped>
</style>
