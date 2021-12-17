<template>
  <div class="chat-icon flex">
    <fontAwesome class="icon" :icon="['fas', 'comment']" />
  </div>
</template>

<script>
export default {
  name: "ChatIcon",
};
</script>

<style scoped>
.chat-icon {
  width: 60px;
  height: 60px;
  position: fixed;
  right: 60px;
  bottom: 20px;
  background-color: var(--sec-color);
  border-radius: 50%;
  font-size: 1.7rem;
  cursor: pointer;
  z-index: 100;
}
.icon {
  color: var(--chat-icon);
}
@media (max-width: 600px) {
  .chat-icon {
    width: 50px;
    height: 50px;
  }
}
</style>