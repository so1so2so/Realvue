<template>
    <li >
      <p>{{chuandishujudaozhilei.id}}</p>
      <p>{{chuandishujudaozhilei.username}}</p>
      <p>{{chuandishujudaozhilei.password}}</p>
      <!--<p>我是V-nodeitems</p>-->
    </li>
</template>

<script>
    export default {
        name: "vnodeitems",
        data(){
          return{}
      },
      props:{
          chuandishujudaozhilei:Object
      },

    }
</script>

<style scoped>

</style>
