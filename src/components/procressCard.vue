<template>
  <div class="">
    <img class="" :src="img" :alt="alt" />
    <h3 class="">{{ title }}</h3>
    <p class="">
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  name: "procressCard",
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
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
/* @import "../assets/css/procress.scss"; */
</style>
