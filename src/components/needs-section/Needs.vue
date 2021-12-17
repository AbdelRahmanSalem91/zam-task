<template>
  <section class="needs">
    <div class="row">
      <div class="needs__text col-lg-6">
        <div class="needs__container">
          <h2 class="needs__title text-center text-md-end">
            كل ما تحتاجه لنمو متجرك في مكان واحد
          </h2>
          <p class="needs__desc text-center text-md-end">
            مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول
            سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
          </p>
          <ul class="needs__list">
            <li class="needs__list-points flex">
              <span class="needs__list-point shadow flex"
                ><fontAwesome :icon="['far', 'list-alt']"
              /></span>
              <span>سهولة ادارة وتفعيل تطبيقاتك من نفس لوحة تحكم متجرك</span>
            </li>
            <li class="needs__list-points flex">
              <span class="needs__list-point shadow flex"
                ><fontAwesome :icon="['far', 'comment-alt']"
              /></span>
              <span>دعم فني وتقني متكامل ومتوفر على مدار الساعة</span>
            </li>
            <li class="needs__list-points flex">
              <span class="needs__list-point shadow flex"
                ><fontAwesome :icon="['fas', 'hand-holding-usd']"
              /></span>
              <span>أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة</span>
            </li>
          </ul>
          <div class="button__container text-center text-md-end">
            <Button class="button" />
          </div>
        </div>
      </div>
      <div class="needs__video col-lg-6 text-sm-center">
        <Square class="needs__square" />
        <Video class="video" />
        <Circle class="needs__circle" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../shared/button/Button.vue";
import Circle from "../shared/circle/Circle.vue";
import Square from "../shared/square/Square.vue";
import Video from "../shared/video/Video.vue";
export default {
  components: {
    Button,
    Circle,
    Square,
    Video,
  },
};
</script>

<style scoped>
.needs {
  width: 100%;
  padding-top: 70px;
  padding-bottom: 40px;
  background-color: var(--gray-bg);
  margin-top: 100px;
  padding-right: 20px;
  padding-left: 20px;
}
.needs__container {
  width: 95%;
  margin: 0 auto;
}
.needs__title {
  font-size: 1.6rem;
  font-weight: 800;
}
.needs__desc {
  font-size: 1.1rem;
  margin: 0;
}
.needs__list {
  margin-bottom: 30px;
}
.needs__list-points {
  justify-content: flex-start;
  margin: 20px 0;
}
.needs__list-point {
  color: var(--main-color);
  font-size: 1.2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 10px;
}
.button {
  margin-bottom: 0;
}
.needs__video {
  position: relative;
}
.video {
  width: 90%;
}
.needs__square {
  top: -50px;
  left: 20px;
}
.needs__circle {
  right: -70px;
  bottom: -70px;
}
@media (max-width: 768px) {
  .needs__title {
    font-size: 1.4rem;
  }
  .needs__desc {
    font-size: 0.9rem;
  }
  .needs__list-point {
    font-size: 0.9rem;
    width: 40px;
    height: 40px;
  }
  .needs__list-points {
    font-size: 0.9rem;
  }
  .button {
    margin-bottom: 80px;
  }
  .needs__video {
    padding: 0;
  }
  .needs__square {
    left: 0;
    top: -40px;
  }
  .needs__circle {
    right: 0px;
    bottom: -40px;
  }
}
</style>