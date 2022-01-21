<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
    <!-- all components will be generated where the router-view tag is according to their route --->
    <router-view />
  </div>
</template>
<script>
export default {
  //$route is used to get information about the current route
  //$router is used to access the route objects in the router array
  methods: {
    //redirect is pushing another route onto the history
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
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
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
