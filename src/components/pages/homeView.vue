<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <landingPage></landingPage>
    <!-- component -->

    <aboutUs></aboutUs>

    <ServiceView></ServiceView>

    <routeComponentView></routeComponentView>

    <contactUs></contactUs>
  </div>
</template>
<script>
// import store from "../../store/index";
// import navbarComponent from "../pages/navbarView.vue";
import contactUs from "./contactUs.vue";
import routeComponentView from "./routeComponentView.vue";
import landingPage from "./landingPage.vue";
import aboutUs from "./aboutUs.vue";
import NavbarComponent from "./navbarView.vue";
import ServiceView from "./serviceView.vue";
export default {
  data() {
    return {};
  },
  components: {
    contactUs,
    routeComponentView,
    landingPage,
    aboutUs,
    NavbarComponent,
    ServiceView,
  },
  computed: {
    // portfolios() {
    //     return store.state.Portfolio.portfolios;
    // },
    // adverts() {
    //     return store.state.Advert.advirts;
    // },
    // services() {
    //     return store.state.Service.Services;
    // },
    // heros() {
    //     return store.state.Hero.Heros;
    // },
    // artists() {
    //     return store.state.Artist.Artists;
    // },
    // partners() {
    //     return store.state.Partner.Partners;
    // },
    // gallaries() {
    //     return store.state.Gallary.gallaries;
    // }
  },
  beforeMount() {
    // store.dispatch("Portfolio/setPortfolios");
    // store.dispatch("Advert/setAdverts");
    // store.dispatch("Service/setServices");
    // store.dispatch("Hero/setHeros");
    // store.dispatch("Artist/setArtists");
    // store.dispatch("Partner/setPartners");
    // store.dispatch("Gallary/setGallaries");
    // this.video();
  },
};
</script>
