<template>
  <section id="home" class="home">
    <div class="container-">
      <div class="flex-">
        <div class="content">
          <h1 class="">let us brighten your smile</h1>

          <p class="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            perspiciatis sint ex quaerat quas delectus assumenda, saepe deleniti
            cum architecto itaque repellat tempora dolores perferendis minus,
            non tenetur praesentium maiores.
          </p>
          <appointmentBtn />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import appointmentBtn from "@/components/global/appointmentBtn.vue";
export default {
  name: "HomeView",
  components: {
    appointmentBtn,
  },
};
</script>
<style scoped lang="css">
/* @import "../assets/css/home.scss"; */
</style>
