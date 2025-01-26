<template>
  <nav class="nav">
    <router-link
      v-for="(link, i) in links"
      :key="i"
      :to="link.link"
      class="nav-link"
      exact
      >{{ link.name }}</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      links: [
        { name: "Home", link: "/#home" },
        { name: "About", link: "/#about" },
        { name: "services", link: "/#services" },
        { name: "reviews", link: "/#reviews" },
        { name: "Contact", link: "/#contact" },
      ],
    };
  },
};
</script>
<style scoped lang="css">
/* @import "../../assets/css/nav.scss"; */
</style>
