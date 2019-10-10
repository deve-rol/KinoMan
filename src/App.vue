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
export default {
  name: 'app',
  mounted() {
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
