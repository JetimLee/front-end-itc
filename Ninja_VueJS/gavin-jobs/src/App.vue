<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>
    <!-- all components will be generated where the router-view tag is according to their route --->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 60px;
}

#nav a.router-link-exact-active {
  color: #136ef8;
  background: crimson;
}
</style>
