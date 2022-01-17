<template>
  <div>
    <div class="results">Your results are {{ results }}ms</div>
    <p v-if="results < 500">You have rapid fingers!</p>
    <p v-else>Keep trying to go faster!</p>
  </div>
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