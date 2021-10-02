<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 
 <div class="body container">
    <NavBar></NavBar>
<h6 style="color:#ffff;font-family:monospace;margin-top:15px;padding-top:15px">Total {{info.data.movie_count}} Movies</h6>
    <div class="row">
   <div v-if="loading">
     <h2>Loading ...</h2>
   </div>
   <div v-else class="row">
      <div class="col-md-3" v-for="movie in info.data.movies" :key="movie.id">
      
      <div >
      <!-- Image Component -->

      <ImagePart :movie="movie" @moviedetail="moviedetail" > </ImagePart>
     
     <!-- Title Componenet -->
      <Title :title="movie.title_long"></Title>
      <a  :href="movie.torrents[0].url" class="btn btn-outline-success">Download</a>
      </div>
    </div>

    <div class="row navig">
      <nav aria-label="Page navigation example">
        
  <ul class="pagination">
    <li class="page-item"><a  @click="Previous()" class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a   @click="Page(1)" class="page-link" href="#">1</a></li>
    <li class="page-item"><a  @click="Page(2)" class="page-link" href="#">2</a></li>
    <li class="page-item"><a  @click="Page(3)" class="page-link" href="#">3</a></li>
    <li class="page-item" ><a class="page-link" href="#" @click="NextPage()">Next</a></li>
  </ul>
</nav>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
import ImagePart from "./components/Image.vue";
import Title from "./components/title.vue";
import axios from "axios";

export default {
  name: "App",
   data(){
  return{
    loading:true,
    page:1,
    info:'',
    movie_count :0
  }
   },
  components: {
    ImagePart,
    Title,
    NavBar
  },
 methods:{
 moviedetail(e){
  var url = " https://yts.mx/api/v2/movie_details.json?with_images=true&with_cast=true&movie_id="+e;
    axios
      .get(url)
      .then((response) => (this.info = response.data,this.loading = false));

 }
   ,
    NextPage(){
    var url = "https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=6.0&page="+this.page+1
    axios
      .get(url)
      .then((response) => (this.info = response.data,this.loading = false));

      this.page+=1
      },

    Previous(){
      var page = this.page-1;
     var url = "https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=6.0&page="+page;
    axios
      .get(url)
      .then((response) => (this.info = response.data,this.loading = false));

      this.page = page;
    },
    Page(page){
      var page_number = page;
     var url = "https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=6.0&page="+page_number;
    axios
      .get(url)
      .then((response) => (this.info = response.data,this.loading = false));

      this.page = page_number;

    }
  },

  async created() {
    var url = "https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=6.0&page="+this.page
    axios
      .get(url)
      .then((response) => (this.info = response.data,this.loading = false));
  },
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  color: aliceblue;
}
.navig{
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 35%;
}
</style>
