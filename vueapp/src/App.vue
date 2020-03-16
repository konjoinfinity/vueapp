<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Home msg="News App" />
    <router-view />
    <router-link to="/home">Home</router-link>
    <router-link to="/news">News</router-link>
    <Navigation></Navigation>
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
import Navigation from "./components/Nav";

export default {
  name: "App",
  components: {
    Navigation
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
