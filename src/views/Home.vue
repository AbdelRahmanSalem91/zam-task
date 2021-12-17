<template>
  <Navbar />
  <main>
    <Develope />
    <Needs />
    <Featured />
    <Footer />
    <Arrow-up />
    <Chat-icon />
  </main>
</template>

<script>
import Navbar from "../components/shared/navbar/Navbar.vue";
import Develope from "../components/develope-section/Develope.vue";
import Needs from "../components/needs-section/Needs.vue";
import Featured from "../components/featured-section/Featured.vue";
import Footer from "../components/shared/footer/Footer.vue";
import ArrowUp from "../components/shared/arrow-up/ArrowUp.vue";
import ChatIcon from "../components/shared/chat-icon/ChatIcon.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Develope,
    Needs,
    Featured,
    Footer,
    ArrowUp,
    ChatIcon,
  },
};
</script>

<style>
</style>