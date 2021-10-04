<template>
  <div class="container-fluid">
  <div class="body container">
    <NavBar></NavBar>
      <router-view/>
  
  </div>
   <Footer></Footer>
</div>
</template>

<script>
import NavBar from './components/navbar.vue'
import Footer from './components/footer.vue'
export default {
 components:{
   NavBar,
   Footer,
 }
}
</script>

<style scoped>

</style>