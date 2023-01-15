<template>
  <section class="container">
    <h2>{{ user.username }}</h2>
    <h2>{{ otherUser.username }}</h2>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const user = ref({ username: 'Max', age: 34 });
    const otherUser = reactive({ username: 'Smith', role: 'Agent' });

    setTimeout(() => {
      user.value.username = 'Gavin';
    }, 2000);
    setTimeout(() => {
      otherUser.username = 'James';
    }, 2000);
    return { user, otherUser };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
