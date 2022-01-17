<template>
  <header>
    <h1>{{ title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: { title: String },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>