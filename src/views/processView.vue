<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="process">
    <h1 class="">work process</h1>
    <div class="box-container">
      <procressCard
        v-for="(card, i) in cards"
        :key="i"
        :img="card.img"
        :title="card.title"
        :text="card.text"
        :alt="card.alt"
      />
    </div>
  </section>
</template>
<script>
import procressCard from "@/components/procressCard.vue";
export default {
  name: "processView",
  components: {
    procressCard,
  },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    fetch("data/procress.json")
      .then((Response) => Response.json())
      .then((data) => {
        this.cards = data.map((card) => ({
          ...card,
          img: require(`@/assets/images/${card.img}`),
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style scoped lang="scss">
// @import "../assets/css/procress.scss";
</style>
