<template>
  <button @click="action(courseID)">{{ role }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["role", "action", "courseID"],
};
</script>

<style scoped>
</style>