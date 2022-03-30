<template>
  <form @submit.prevent="submitHandler">
    <label>Project Title:</label>
    <input v-model="title" type="text" required />
    <label>Project Titles</label>
    <textarea
      v-model="details"
      required
      placeholder="Enter details here..."
    ></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  data() {
    return { title: "", details: "", url: "http://localhost:3000/projects" };
  },
  methods: {
    async submitHandler() {
      const project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      try {
        await fetch(this.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(project),
        });
        console.log("created a new project successfully");
        console.log(project);
        this.title = "";
        this.details = "";
        (() => {
          this.$router.push("/");
        })();
      } catch (error) {
        console.log("an error occurred when trying to make a new project");
        console.log(error);
      }
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  color: white;
  padding: 10px;
  background: #00ce89;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
>
