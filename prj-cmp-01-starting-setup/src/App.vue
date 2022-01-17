<template>
  <div>
    <ul>
      <LearningResource
        :title="course.title"
        :description="course.description"
        :link="course.link"
        v-for="course in storedResources"
        :key="course.id"
      />
    </ul>
  </div>
</template>


<script>
import LearningResource from './components/LearningResources/LearningResource.vue';
export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'python',
          title: 'Python With Gavin',
          description: 'Learn the Latest Python With Gavin.',
          link: 'https://learnwithgavin.com',
        },
        {
          id: 'javascript',
          title: 'JavaScript With Gavin',
          description: 'Learn the Latest JavaScript With Gavin.',
          link: 'https://learnwithgavin.com',
        },
      ],
    };
  },
};
</script>