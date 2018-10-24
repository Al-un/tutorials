<template>
<div class="photo-container">

    <p v-if="photos.length === 0">There is no photos for the moment</p>

    <div v-for="photo of photos" :key="photo.id" v-if="photo.id >= 0 && photo.id < 10" class="photo">
        <p class="photo-header">{{ photo.id }}: {{ photo.title }}</p>
        <img :src="photo.url">
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'News',

  data () {
    return {
      photos: []
    }
  },

  created () {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => { this.photos = response.data })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.photo-container{
    display: flex;
    flex-wrap: wrap;
}
.photo-container img{
    width: 200px; 
    height: 200px; 
}

.photo{
    width: 200px; 
    height: 200px; 
    padding: 10px;
    background: rgba(128, 0, 0, 0.1);
    border: 1px dotted red;
}
.photo:hover{
    background: salmon;
}
.photo p.photo-header{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 200px;
    margin: 0;
    color: white;
    padding: 5px;
    box-sizing: border-box;
}
</style>