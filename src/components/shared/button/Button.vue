<template>
  <button>
    تصفح التطبيقات <fontAwesome :icon="['fas', 'chevron-left']" />
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
button {
  background-color: var(--main-color);
  color: var(--yellow-color);
  padding: 15px 75px;
  border-radius: 15px;
  font-size: 1.5rem;
  font-weight: 400;
  border: 0;
  margin-bottom: 30px;
  cursor: pointer;
}
@media (max-width: 768px) {
  button {
    padding: 10px 15px;
    font-size: 1rem;
  }
}
</style>