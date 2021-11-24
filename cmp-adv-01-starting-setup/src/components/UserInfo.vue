<template>
  <BaseCard>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>

    <template v-slot:default>
      <p>{{ infoText }}</p>
    </template>
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
