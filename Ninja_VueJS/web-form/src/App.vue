<template>
  <SignupForm />
</template>

<script>
import SignupForm from "./components/SignupForm.vue";
export default {
  name: "App",
  components: { SignupForm },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #eee;
}
</style>
