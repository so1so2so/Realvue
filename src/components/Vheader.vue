<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-for="(items,index) in routes" :class="{active:index==instanceindex}"   @click="click(index)">
            <router-link :to="items.url">{{items.title}}</router-link>
          </li>
        </ul>
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
      </div>
      </div>
      </div>

</template>

<script>
  export default {
    name: "Vheader",
    data() {
      return {
        routes:[
          {url:'/',title:"我的首页"},
          {url:'/note',title:"我的笔记"},
          {url:'/note2',title:"我的笔记"},
          ],
        instanceindex:0

      }
    },
    methods:{
      click(index){
        this.instanceindex=index
      },
    },
    created(){
      for(var i = 0;i<this.routes.length;i++){
        if(this.routes[i].url == this.$route.path){
          this.instanceindex=i;
          return
        }
      }
    }
  }
</script>

<style scoped>

</style>
