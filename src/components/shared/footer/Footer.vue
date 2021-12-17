<template>
  <footer class="footer">
    <div class="logo flex">
      <Logo />
    </div>
    <div class="social__icons flex">
      <fontAwesome class="icon mx-2" :icon="['fab', 'twitter']" />
      <fontAwesome class="icon mx-2" :icon="['fab', 'instagram']" />
      <fontAwesome class="icon mx-2" :icon="['fab', 'linkedin']" />
      <fontAwesome class="icon mx-2" :icon="['fab', 'youtube']" />
    </div>
  </footer>
</template>

<script>
import Logo from "../logo/Logo.vue";
export default {
  components: { Logo },
};
</script>

<style scoped>
.social__icons {
  width: 20%;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>