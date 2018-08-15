<template>
    <div class="note">
        <Vnodelist></Vnodelist>
    </div>
</template>

<script>
  import Vnodelist from "./nodelist"

    export default {
        name: "nodeshow",
    data() {
      return {}
    },
      components:{
          Vnodelist
      }
    }
</script>

<style scoped>

</style>
