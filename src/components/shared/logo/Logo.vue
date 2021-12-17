<template>
  <div class="logo__text flex">
    <span><b>zid</b>App</span> <span>Market</span>
  </div>
  <div class="logo__image">
    <img :src="logo" alt="" />
  </div>
</template>

<script>
import logo from "../../../assets/images/logo.png";
export default {
  name: "Logo",
  data: function () {
    return { logo: logo };
  },
};
</script>

<style scoped>
.logo__text {
  flex-direction: column;
  font-weight: 400;
}
.logo__image {
  width: 50px;
  margin-right: 10px;
}
.logo__image img {
  width: 100%;
}
</style>