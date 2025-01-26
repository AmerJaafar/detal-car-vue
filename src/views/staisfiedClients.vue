<template>
  <section class="reviews" id="reviews">
    <h1 class="">staisfied clients</h1>

    <div class="box-container">
      <reviewsCard
        v-for="(card, i) in cards"
        :key="i"
        :img="card.img"
        :alt="card.alt"
        :text="card.text"
        :stars="card.stars"
        :name="card.name"
        :span="card.span"
      />
    </div>
  </section>
</template>
<script>
import reviewsCard from "@/components/reviewsCard.vue";

export default {
  name: "staisfiedClients.",
  components: { reviewsCard },
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    fetch("data/reviews.json")
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
// @import "../assets/css/staisfied.scss";
</style>
