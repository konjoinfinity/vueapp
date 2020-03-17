<template>
  <div id="app">
    <h2>Konjo News</h2>
    <router-view></router-view>
    <router-link to="/">Home</router-link>
    <router-link to="/news">News</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
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
</style>
