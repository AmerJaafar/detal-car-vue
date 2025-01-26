<template>
  <headerComponent />
  <home-view></home-view>
  <about-view></about-view>
  <services-view></services-view>
  <processView></processView>
  <staisfiedClients></staisfiedClients>
  <makeAppointment></makeAppointment>
  <footerComponent></footerComponent>
</template>

<style lang="css">
@import "@/assets/app.css";
</style>

<script>
import headerComponent from "@/components/global/header.vue";
import HomeView from "@/views/HomeView.vue";
import aboutView from "@/views/aboutView.vue";
import servicesView from "@/views/servicesView.vue";
import processView from "@/views/processView.vue";
import staisfiedClients from "@/views/staisfiedClients.vue";
import makeAppointment from "@/views/makeAppointment.vue";
import footerComponent from "@/components/global/footer.vue";
export default {
  components: {
    headerComponent,
    HomeView,
    aboutView,
    servicesView,
    processView,
    staisfiedClients,
    makeAppointment,
    footerComponent,
  },
};
</script>
