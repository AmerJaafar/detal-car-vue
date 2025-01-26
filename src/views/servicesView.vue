<!-- eslint-disable prettier/prettier -->
<template>
  <section id="services" class="services">
    <h1>Our Services</h1>
    <div class="box-container">
      <servicesCards
        v-for="(card, i) in cards"
        :key="i"
        :img="card.img"
        :title="card.title"
        :discreption="card.discreption"
        :alt="card.alt"
      />
    </div>
  </section>
</template>

<script>
import servicesCards from "@/components/servicesCards.vue";
// import { data } from "autoprefixer";

export default {
  name: "servicesView",
  components: { servicesCards },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    fetch("/data/cards.json") // استخدم المسار النسبي في public
      .then((response) => response.json())
      .then((data) => {
        this.cards = data.map((card) => ({
          ...card,
          img: require(`@/assets/images/${card.img}`), // تحميل الصور من src/assets/images
        }));
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  },
};
</script>

<style lang="scss" scoped>
// @import "../assets/css/services.scss";
</style>
