<template>
  <section class="about" id="about">
    <div class="">
      <span class=""> about us </span>

      <h3 class="">true healhcare for your family</h3>

      <p class="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
        voluptates cupiditate ullam quisquam maxime reprehenderit fugit
        necessitatibus corrupti, ut saepe aliquid aliquam exercitationem, fuga
        molestias.
      </p>
      <appointmentBtn />
    </div>
  </section>
</template>
<script>
import appointmentBtn from "@/components/global/appointmentBtn.vue";
export default {
  name: "aboutView",
  components: {
    appointmentBtn,
  },
};
</script>
<style scoped lang="scss">
// @import "../assets/css/about.scss";
</style>
