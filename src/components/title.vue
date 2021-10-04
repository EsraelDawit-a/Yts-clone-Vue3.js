<template>
     <div class="row">
        <h2>{{title }}</h2>
      </div>
</template>

<script>
export default {
    name:"Title",
    props:{
        title:String
    }
}
</script>

<style scoped>

div{
    color: rgb(16, 53, 75);
}
h2{
    font-size: 15px;
    color: #fff;
    font-family:monospace;
    font-weight: 700;
}

</style>