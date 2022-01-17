<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Course</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: { title: String, id: String, description: String, link: String },
  data() {
    return {};
  },
};
</script>