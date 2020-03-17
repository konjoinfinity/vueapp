<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome!</h1>
      <button
        class="btn btn-warning btn-lg"
        onclick="(function(){console.log('You are on the Home Page')})()"
      >Console Log</button>
      <p class="lead">View current events in real time and subscribe to stay in the loop.</p>
      <hr class="my-4" />
      <p>Keep up to date with current events.</p>
      <p class="lead">
        <router-link class="btn btn-primary btn-lg nav-link" to="/news" role="button">Read the News</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
