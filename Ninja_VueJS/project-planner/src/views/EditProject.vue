<template>
  <h1>Edit Project</h1>
  <form @submit.prevent="submitHandler">
    <label>Project Title:</label>
    <input v-model="title" type="text" required />
    <label>Project Details</label>
    <textarea
      v-model="details"
      required
      placeholder="Enter details here..."
    ></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  async mounted() {
    console.log(this.id);
    const response = await fetch(`http://localhost:3000/projects/${this.id}`);
    const data = await response.json();
    console.log(data);
    this.title = data.title;
    this.details = data.details;
  },
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    async submitHandler() {
      console.log("clicked");
      console.log(this.details, this.title);
      await fetch(`http://localhost:3000/projects/${this.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          details: this.details,
          title: this.title,
        }),
      });
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>