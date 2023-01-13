<template>
  <div class="post-list">
    <h2>post list</h2>
    <div v-for="post in posts" :key="post.id">
      <h3><SinglePost :post="post" /></h3>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  name: "PostList",
  components: {
    SinglePost,
  },
  props: ["posts"],
  setup(props) {
    onMounted(() => {
      console.log("post list was mounted");
    });
  },
};
</script>

<style></style>
