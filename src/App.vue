<template>
  <div id="app">
    <Vhead></Vhead>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Vhead from './components/Vheader'
export default {
  name: 'App',
  components:{Vhead}
}
</script>

<style scoped>
</style>
