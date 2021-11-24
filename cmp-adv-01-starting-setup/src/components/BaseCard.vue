<template>
  <div>
    <!-- can only have one unnamed slot per template, rest must be named! --->
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5rem;
}
</style>