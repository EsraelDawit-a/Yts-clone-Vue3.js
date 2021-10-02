<template>
    <nav class="navbar navbar-dark bg-dark">
 <div class="container-fluid">
    <a class="navbar-brand" style="color:#42b983;font-family:monospace;font-weight:700">VueMovies</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>



</template>

<script>
export default {
    name:"NavBar"
}
</script>