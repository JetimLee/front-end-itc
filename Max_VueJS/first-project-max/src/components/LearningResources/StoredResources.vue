<template>
  <ul>
    <LearningSource
      v-for="course in courses"
      :key="course.id"
      :id="course.id"
      :title="course.title"
      :link="course.link"
      :description="course.description"
      :deleteCourse="deleteCourse"
    />
  </ul>
</template>

<script>
import LearningSource from "./LearningSource.vue";
export default {
  props: ["courses", "deleteCourse"],
  components: { LearningSource },

  name: "App",
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
