<template>
  <BaseCard>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </BaseCard>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  props: ["fullName", "infoText", "role"],
  components: {
    BaseCard,
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>