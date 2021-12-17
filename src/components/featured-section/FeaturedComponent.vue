<template>
  <div class="feature mx-auto mt-3">
    <div class="felx px-2 feature__container mx-auto d-flex">
      <div class="feature__image">
        <img :src="featuredImg" alt="قمرة" />
      </div>
      <div class="feature__info">
        <h3 class="name d-flex">
          <span>قمرة</span>
          <span class="rating d-flex">
            <fontAwesome class="rating__star" :icon="['fas', 'star']" />
            <span class="rating__value">5</span>
          </span>
        </h3>
        <small>
          تطوير:
          <span class="feature__developer"> عبد الرحمن</span>
        </small>
        <p class="feature__desc">
          نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
        </p>
        <p class="feature__desc">
          نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import featuredImg from "../../assets/images/featured.png";
export default {
  name: "featuredComponent",
  data: function () {
    return { featuredImg: featuredImg };
  },
};
</script>

<style scoped>
.feature__container {
  padding: 30px 20px;
  background-color: var(--sec-gray-bg);
  border-radius: 15px;
  align-items: flex-start;
  justify-content: flex-start;
}
.feature__image {
  width: 12%;
}
.feature__image img {
  max-width: 100%;
}
.feature__info {
  width: 88%;
  padding-right: 10px;
  padding-left: 10px;
}
.name {
  color: var(--main-color);
  width: 30%;
  justify-content: space-between;
  margin-bottom: 0;
  font-size: 1.3rem;
  font-weight: 400;
}
.name span:first-child {
  margin-left: 50px;
}
.rating__star {
  color: var(--yellow-color);
  font-size: 0.9rem;
}
.rating__value {
  color: var(--green-color);
  margin: 0 5px;
  font-size: 16px;
}
.feature small {
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
}
.feature__developer {
  color: #999;
}
.feature__desc {
  font-size: 0.8rem;
  margin: 0;
  line-height: 2;
  font-weight: 400;
}
@media (max-width: 600px) {
  .feature__container {
    width: 100%;
  }
}
</style>