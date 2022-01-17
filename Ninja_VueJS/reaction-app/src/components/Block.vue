<template>
  <div class="block" v-if="showBlock" @click="stopReactionTime">Click me</div>
</template>
<script>
export default {
  props: { delay: String },
  mounted() {
    console.log("I am mounted!");
    setTimeout(() => {
      this.showBlock = true;
      console.log("here is delay");
      console.log(this.delay);
      this.startReactionTime();
    }, this.delay);
  },
  //this fires when the component updates
  updated() {
    console.log("I updated!");
  },
  //this also fires with vue routing, when you're going from page to page
  unmounted() {
    console.log("I unmounted!");
  },
  data() {
    return {
      showBlock: false,
      reactionTime: 0,
      //storing the timer here so it can be accessed by everything. rememember local state can be fully accessed in the whole local component
      timer: null,
    };
  },
  methods: {
    startReactionTime() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopReactionTime() {
      clearInterval(this.timer);
      this.$emit("endGame", this.reactionTime);
    },
  },
};
</script>
<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>