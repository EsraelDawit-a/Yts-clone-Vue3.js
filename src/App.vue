<template>
  
  <div class="body container">
    <NavBar></NavBar>
      <router-view/>
 
  </div>

</template>

<script>
import NavBar from './components/navbar.vue'
export default {
 components:{
   NavBar,
 }
}
</script>

<style scoped>

</style>