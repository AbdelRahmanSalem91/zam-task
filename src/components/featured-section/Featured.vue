<template>
  <div class="featured__section">
    <div class="featured__intro">
      <h3 class="featured__title">التطبيقات المميزة</h3>
      <p class="featured__desc">تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
    </div>
    <div class="featured__details mx-auto row">
      <featuredComponent class="col-md-6 col-lg-3" />
      <featuredComponent class="col-md-6 col-lg-3" />
      <featuredComponent class="col-md-6 col-lg-3" />
      <featuredComponent class="col-md-6 col-lg-3" />
    </div>
    <div class="button__container">
      <Button class="button" />
    </div>
  </div>
</template>

<script>
import Button from "../shared/button/Button.vue";
import featuredComponent from "./FeaturedComponent.vue";
export default {
  components: {
    featuredComponent,
    Button,
  },
};
</script>

<style scoped>
.featured__section {
  padding-top: 200px;
  padding-bottom: 90px;
  padding-left: 20px;
  padding-right: 20px;
}
.featured__intro {
  text-align: center;
}
.featured__title {
  font-size: 1.8rem;
  margin-bottom: 10px;
}
.featured__desc {
  margin-bottom: 50px;
}
.featured__details {
  width: 100%;
}
.button__container {
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.button {
  background-color: transparent;
}
@media (max-width: 768px) {
  .featured__section {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .featured__title {
    font-size: 1.5rem;
  }
  .featured__desc {
    font-size: 1rem;
  }
}
</style>