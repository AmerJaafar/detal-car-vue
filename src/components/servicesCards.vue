<template>
  <div class="card">
    <img :src="img" :alt="alt" class="" />
    <h3 class="">{{ title }}</h3>
    <p class="">
      {{ discreption }}
    </p>
  </div>
</template>
<script>
export default {
  name: "servicesCards",
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    discreption: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
// @import "../assets/css/services.scss";
</style>
