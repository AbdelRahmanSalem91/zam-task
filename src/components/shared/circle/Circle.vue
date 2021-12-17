<template>
  <div class="circle"></div>
</template>

<script>
export default {
  name: "Circle",
};
</script>

<style scoped>
.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: var(--yellow-color);
  position: absolute;
}
@media (max-width: 768px) {
  .circle {
    width: 200px;
    height: 200px;
  }
}
</style>