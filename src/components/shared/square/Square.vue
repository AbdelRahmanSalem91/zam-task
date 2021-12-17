<template>
  <div class="square flex">
    <span v-for="i in 156" :key="i" class="dot"></span>
  </div>
</template>

<script>
export default {
  name: "Square",
};
</script>

<style scoped>
.square {
  width: 200px;
  height: 250px;
  position: absolute;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--green-color);
  margin: 5px;
}
</style>