<template>
    <div class="wrap">
      请输入新密码:<input type="text" name="" v-model="titleHangler">
      <button class="btn btn-success" @click="addone">提交</button>
        <el-button type="warning" plain round>危险按钮</el-button>
      <div class="mark">
        <textarea rows="10" cols="100" class="editor" v-model="markValue" >

        </textarea>
        <div class="show" v-html="currentValue" ref="t"></div>
      </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Marked from 'marked'
    export default {
        name: "Vmark",
      data() {
      return {
        markValue:'',
      }
    },
      methods:{
         addone(){
                 var json={
                   password:this.titleHangler
                 };
         // console.log(this.$refs.t.innerText)
         //   console.log(json);
         //   this.$store.commit('changepassword',json)
           this.$store.dispatch("changepassword",json)

         }

      },
      computed:{
          titleHangler:{
            set:function (newValue) {
                this.$store.state.note.password=newValue;
              console.log(this.$store.state.note.password);
            },
            get:function () {
                return this.$store.state.note.password;
            },
          },
          currentValue(){
             return Marked(this.markValue);
          }


      }
    }
</script>

<style scoped>
 .t{
   width: 300px;
   height: 100px;
 }
  .mark{
    width: 800px;
    height: 400px;
    margin: 0 auto;
  }
  .editor,.show{
    float: left;
    width: 395px;
    height: 400px;
    border: 1px solid #666;
  }
</style>
