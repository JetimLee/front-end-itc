<template>
  <div>
    <h1>Gavin Reaction Timer</h1>
    <!--Can bind html attributes as well --->
    <button @click="start" :disabled="isPlaying">Play a game!</button>
    <Block v-if="isPlaying" :delay="delay" @endGame="endGame"></Block>
    <Results v-if="score" :results="score" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";
export default {
  name: "App",
  components: { Block, Results },
  data() {
    return { isPlaying: false, delay: null, score: null };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.score = null;
      this.delay = Math.round(2000 + Math.random() * 5000);
      console.log(this.delay);
    },
    //the data is passed to the function that the event is emitted to
    endGame(reactionTime) {
      this.isPlaying = false;
      this.score = reactionTime;
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
  color: #444;
  margin-top: 60px;
}
</style>
