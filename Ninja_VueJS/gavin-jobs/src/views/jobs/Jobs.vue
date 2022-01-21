<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "UX Designer", id: 1, details: "designs shit" },
        { title: "Vue Developer", id: 2, details: "develops cool stuff" },
        { title: "Cashier", id: 3, details: "cashiers" },
      ],
    };
  },
};
</script>

<style>
</style>