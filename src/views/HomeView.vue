<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pf.png">
    <HelloWorld msg="Bienvenidos a PediFast"/>
    <br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.home{
  background-color: rgb(193, 189, 189);
}
</style>