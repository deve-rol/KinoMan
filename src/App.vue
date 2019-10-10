<template>
  <div id="app">
    <header>
      <div class="logo">
        <h1 @click="goHome()">КИНОМАН</h1>
      </div>
    </header>
    <div class="views-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  // "https://api.themoviedb.org/3/discover/movie?with_genres=Action"
  // 'https://api.themoviedb.org/3/genre/movie/list?api_key=6d65fd685a5fa4208280ac51e403570b&language=ru-ru'
import axios from "axios"
export default {
  name: 'app',
  mounted() {
    // axios
    //         .get("https://api.themoviedb.org/3/discover/movie?api_key=6d65fd685a5fa4208280ac51e403570b&with_genres=28")
    //         .then( res => {
    //           console.log(res);
    //         });
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  @import "assets/GlobalCss/index.css";
</style>
