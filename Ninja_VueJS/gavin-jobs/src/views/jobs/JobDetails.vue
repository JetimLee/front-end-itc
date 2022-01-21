<template>
  <div>
    <h1>Job Details Page</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ details }}</p>
  </div>
</template>

<script>
export default {
  props: { id: Number, details: String },
  data() {
    return {};
  },
};
</script>

<style></style>
