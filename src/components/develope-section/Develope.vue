<template>
  <section class="develope">
    <h1 class="develope__heading px-sm-5">
      طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد
    </h1>
    <p class="develope__desc">
      طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك <br />
      في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
    </p>
    <Button class="button" />
    <div class="develope__video">
      <Square class="develope__square" />
      <Video />
      <Circle class="develope__circle" />
    </div>
  </section>
</template>

<script>
import Button from "../shared/button/Button.vue";
import Circle from "../shared/circle/Circle.vue";
import Square from "../shared/square/Square.vue";
import Video from "../shared/video/Video.vue";
export default {
  name: "Develope",
  components: {
    Button,
    Circle,
    Square,
    Video,
  },
};
</script>

<style scoped>
.develope {
  width: 100%;
  text-align: center;
  padding: 70px 0 30px 0;
}
.develope__heading {
  color: var(--main-color);
  font-size: 2.3rem;
  font-weight: 800;
}
.develope__desc {
  font-size: 1.3rem;
  margin-bottom: 50px;
}
.develope__video {
  margin: 0px auto;
  position: relative;
  padding: 50px;
  width: 60%;
}
.develope__square {
  top: 0;
  left: -50px;
}
.develope__circle {
  bottom: -40px;
  right: -20px;
}
@media (max-width: 768px) {
  .develope__heading {
    font-size: 1.5rem;
  }
  .develope__desc {
    font-size: 0.9rem;
  }
  .button {
    margin-bottom: 80px;
  }
  .develope__video {
    width: 85%;
    padding: 0;
  }
  .develope__square {
    top: -40px;
    left: -30px;
  }
  .develope__circle {
    bottom: -40px;
    right: -30px;
  }
}
</style>
