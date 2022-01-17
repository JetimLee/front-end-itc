<template>
  <li>
    <BaseCard>
      <header>
        <p>{{ description }}</p>
        <BaseButton role="Delete" :action="deleteCourse" :courseID="id" />
      </header>
      <nav><a :href="link">View the Course</a></nav>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseCard, BaseButton },
  name: "LearningSource",
  props: {
    id: String,
    description: String,
    link: String,
    title: String,
    deleteCourse: Function,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>

