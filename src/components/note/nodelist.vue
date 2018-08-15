<template>
  <ul>
    <nodeitems v-for="item in getalldate":chuandishujudaozhilei="item"></nodeitems>
  </ul>
</template>

<script>
  import nodeitems from "./vnodeitems"
    export default {
        name: "nodelist",
      data(){
          return{
          }
      },
      components:{
            nodeitems
          },
      computed:{
          getalldate(){
            return this.$store.state.alllist;
          }
      }
    }
</script>

<style scoped>

</style>
