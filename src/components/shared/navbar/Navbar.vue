<template>
  <!-- <nav class="nav position-fixed">
    <div
      class="container d-flex justify-content-between align-items-center w-75"
    >
      <a href="#" class="logo flex">
        <Logo class="nav__logo" />
      </a>

      <a href="#">الرئيسية</a>
      <a href="#">التصنيفات</a>
      <a href="#">التطبيقات</a>
      <a href="#">طور تطبيق</a>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div
      class="
        container-fluid
        nav__container
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <a class="navbar-brand logo d-flex align-items-center" href="#">
        <Logo />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="
            navbar-nav
            justify-content-between
            align-items-center
            w-75
            mx-auto
          "
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">التصنيفات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">التطبيقات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">طور تطبيق</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../logo/Logo.vue";
export default {
  components: { Logo },
  name: "Navbar",
};
</script>

<style scoped >
.nav {
  background-color: #fff;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  z-index: 200;
}
.nav__container {
  width: 75%;
}
.logo {
  color: var(--main-color) !important;
}
@media (max-width: 600px) {
  .nav__container {
    width: 100%;
  }
}
</style>