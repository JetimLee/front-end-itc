<template>
  <div>
    <TheHeader :title="myTitle" />
    <StoredResources :deleteCourse="deleteCourse" :courses="storedCourses" />
  </div>
</template>

<script>
import StoredResources from "./components/LearningResources/StoredResources.vue";
import TheHeader from "./components/UI/TheHeader.vue";
export default {
  name: "App",
  components: { StoredResources, TheHeader },
  methods: {
    deleteCourse(id) {
      console.log(id);
      console.log(this.storedCourses);
      this.storedCourses = this.storedCourses.filter((el) => el.id !== id);
    },
  },
  data() {
    return {
      myTitle: "I love learning",
      storedCourses: [
        {
          id: "official-python",
          title: "Official Python",
          description: "The Official Python Course with Gavin",
          link: "https://learnwithgavin.com",
        },
        {
          id: "official-javascript",
          title: "Official JavaScript",
          description: "The Official JavaScript Course with Gavin",
          link: "https://learnwithgavin.com",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
