<template>
    <nav class="navbar navbar-dark bg-dark">
 <div class="container-fluid">
    <a class="navbar-brand" style="color:#42b983;font-family:monospace;font-weight:700">
      <router-link class="router" to="/">VueMovies</router-link>
    </a>

     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
    <router-link class="router" to="/top-dwonloads">TopDownloads</router-link> |
    <router-link class="router" to="/upcoming">Latest Movies</router-link> |

      
      </li>
      
    </ul>
    
    <form class="d-flex">
      <input v-model="query" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <router-link :to="'/search/'+query">
      <button class="btn btn-outline-success" type="submit">Search</button>
      </router-link>
    </form>
 
  </div>
</nav>



</template>

<script>
export default {
    name:"NavBar",
    data(){
      return{
      
        query:""
      }
    },

   
    
}
</script>

<style scoped>
.navbar-nav{
  flex-direction: row !important;
}
.router{
  color: #42b983;
  text-decoration: none;
}
ul li{
 margin:0 2vw;
}
</style>