<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">我是note</h3>
          </div>
          <div class="panel-body">
            <Vnoteshow></Vnoteshow>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading">

          </div>
          <div class="panel-body">
            <Vmark></Vmark>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  import Vmark from "./Vmark"
  import Vnoteshow from "./nodeshow"
  export default {
    name: "Vnote",
    data() {
      return {
        datelist:[
          {id:1,title:"Python",content:"Python自动化运维"},
          {id:1,title:"Linux",content:"Linux运维"},
        ]
      }
    },
    components:{
      Vnoteshow,
      Vmark,
    }
  }
</script>

<style scoped>

</style>
