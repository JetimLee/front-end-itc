<template>
  <div class="results">Your results are {{ results }}ms</div>
</template>

<script>
export default {
  name: "Results",
  props: { results: String },
};
</script>

<style scoped>
.results {
  width: 400px;
  border-radius: 20px;
  background: lightblue;
  color: black;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>