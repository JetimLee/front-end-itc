<template>
  <nav class="filter-nav">
    <button
      :class="{ active: current === 'completed' }"
      @click="updateFilter('completed')"
    >
      Completed
    </button>
    <button
      :class="{ active: current === 'ongoing' }"
      @click="updateFilter('ongoing')"
    >
      Ongoing
    </button>
    <button :class="{ active: current === 'all' }" @click="updateFilter('all')">
      All
    </button>
  </nav>
</template>

<script>
export default {
  mounted() {
    console.log(this.current);
  },
  props: ["current"],
  methods: {
    updateFilter(value) {
      this.$emit("filter", value);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>