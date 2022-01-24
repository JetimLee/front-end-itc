<template>
  <div class="home">
    <!--- projects.length is here because the length of an empty array is -1, which is falsy --->
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <!--here you can pass down the object being cycled over as a prop -->
        <SingleProject
          @completed="completedHandler"
          @deleted="deleteHandler"
          :project="project"
        />
      </div>
    </div>
    <div v-else><p>There's no projects to show!</p></div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
export default {
  name: "Home",
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    completedHandler(value) {
      //pretty similar to filter, but we're not getting rid of anything
      let p = this.projects.find((project) => {
        return project.id === value;
      });
      p.complete = !p.complete;
    },
    deleteHandler(value) {
      this.projects = this.projects.filter((el) => {
        return el.id !== value;
      });
    },
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3000/projects");
      const data = await response.json();
      this.projects = data;
      console.log(this.projects);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
