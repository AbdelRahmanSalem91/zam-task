<template>
  <div @click="scrollTop" v-show="visible" class="arrow-up flex">
    <fontAwesome class="icon" :icon="['fas', 'arrow-up']" />
  </div>
</template>

<script>
export default {
  name: "ArrowUp",
  data() {
    return {
      visible: false,
    };
  },
  // window.scrollTo(0, 0);
  methods: {
    scrollTop: function () {
      window.scrollTo(0, 0);
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.arrow-up {
  position: fixed;
  bottom: 20px;
  left: 70px;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 1.6rem;
  cursor: pointer;
  background-color: var(--sec-color);
  z-index: 100;
}
.icon {
  color: var(--main-color);
}
</style>