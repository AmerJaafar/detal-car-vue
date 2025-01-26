<template>
  <div class="">
    <img :src="img" :alt="alt" />

    <p class="">
      {{ text }}
    </p>
    <div class="stars">
      <i v-for="i in stars" :key="i" class="fas fa-star"></i>
    </div>
    <h3 class="">{{ name }}</h3>
    <span class="">{{ span }}</span>
  </div>
</template>
<script>
export default {
  name: "reviewsCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: false,
      default: 1,
    },
    name: {
      type: String,
      required: true,
    },
    span: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
/* @import "../assets/css/staisfied.scss"; */
</style>
