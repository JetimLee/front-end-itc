<template>
  <div>
    <div v-if="jobs">
      <h1>Jobs</h1>
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link
          :to="{
            name: 'JobDetails',
            params: { id: job.id, details: job.details },
          }"
        >
          <div class="job-card">
            <h2>{{ job.title }}</h2>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading jobs...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: null,
    };
  },
  async mounted() {
    console.log(this.jobs);
    const response = await fetch("http://localhost:3000/jobs");
    const data = await response.json();
    console.log(data);
    this.jobs = data;
  },
};
</script>

<style>
</style>