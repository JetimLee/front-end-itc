<template>
  <div class="project-card" :class="{ completed: project.complete }">
    <div class="actions">
      <h3 @click="showDetails">{{ project.title }}</h3>
    </div>
    <div v-if="showingDetails">
      <p>{{ project.details }}</p>
    </div>
    <div class="icons-container">
      <span @click="toggleComplete" class="material-icons done"> done </span>
      <span @click="deleteProject" class="material-icons delete"> delete </span>
      <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
        <span class="material-icons edit"> edit </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  data() {
    return {
      showingDetails: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  props: { project: Object },
  methods: {
    showDetails() {
      this.showingDetails = !this.showingDetails;
    },
    async deleteProject() {
      await fetch(this.url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      // console.log(response);
      console.log("deleted");
      this.$emit("deleted", this.project.id);
    },
    async toggleComplete() {
      await fetch(this.url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      });
      this.$emit("completed", this.project.id);
    },
  },
};
</script>

<style scoped>
.project-card {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
.project-card.completed {
  border-left: 4px solid green;
}
.project-card.completed .done {
  color: green;
}
h3 {
  cursor: pointer;
}
.icons-container {
  display: flex;
  justify-content: flex-end;
}
.icons-container > span {
  margin: 0 0.5rem;
}
.material-icons {
  font-size: 2rem;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
  transition: 1s all ease;
}
.delete:hover {
  color: crimson;
}
.done:hover {
  color: green;
}
.edit:hover {
  color: blue;
}
</style>