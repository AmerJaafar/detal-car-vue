<template>
  <header class="header">
    <div class="div">
      <div class="flex-center-between">
        <a href="#home" class="logo"
          >nour
          <span class="text">medical</span>
        </a>
        <navBar />
        <appointmentBtn />
        <div id="btnMenu" @click="clicked()" class="fa-solid fa-bars"></div>
      </div>
    </div>
  </header>
</template>
<script>
import navBar from "./navBar.vue";
import appointmentBtn from "./appointmentBtn.vue";
export default {
  name: "headerComponent",
  components: {
    navBar,
    appointmentBtn,
  },

  methods: {
    clicked() {
      const menu = document.querySelector("#btnMenu");
      const navbar = document.querySelector(".header .nav");
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    },
  },
};
</script>
<style lang="css">
/* @import "../../assets/css/header.scss"; */
</style>
