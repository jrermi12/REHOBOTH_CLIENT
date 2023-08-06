<template>
  <section id="routes">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- component -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    /> -->
    <body class="font-sans bg-gray-100">
      <div class="min-h-screen flex justify-center items-center">
        <div class="">
          <div class="text-center font-semibold">
            <h1 class="text-5xl">
              <span class="text-blue-700 tracking-wide">Avaliable </span>
              <span>Routes</span>
            </h1>
            <p
              class="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full"
            >
              Choose a plan that works best for you and<br />
              your team.
            </p>
          </div>
          <!-- component -->
          <div
            class="flex flex-col  min-h-screen p-10 text-gray-700 md:p-20"
          >
            <!-- <h2 class="text-2xl font-medium">Jedi Order Membership</h2> -->

            <!-- Component Start -->
            <div
              class="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8"
            >
             

              <!-- Tile 2 -->
              <div
                 v-for="route in routes" :key="route._id"
                class="z-10 gap-8 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110"
              >
                <div class="flex flex-col items-center p-10 bg-gray-200">
                  <span class="font-semibold">Jedi Knight</span>
                  <div class="flex items-center">
                    <span class="text-3xl">$</span>
                    <span class="text-6xl font-bold">50</span>
                    <span class="text-2xl text-gray-500">/mo</span>
                  </div>
                </div>
                <div class="p-10">
                  <ul>
                    <li class="flex items-center">
                      <svg
                        class="w-5 h-5 text-green-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 italic">Padawan +</span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-5 h-5 text-green-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2">Solo missions</span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-5 h-5 text-green-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2">Utility belt</span>
                    </li>
                  </ul>
                </div>
                <div class="flex px-10 pb-10 justfy-center">
                  <button
                    class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg"
                  >
                    Join now
                  </button>
                </div>
              </div>

             
            </div>
            <!-- Component End  -->
          </div>
        </div>
      </div>
    </body>
  </section>
</template>
<script>
import store from "@/store";
export default {
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
    routes() {
      return store.state.Route.allRoutes;
    },
  },
  beforeMount() {
    // store.dispatch("Portfolio/setPortfolios");
    // store.dispatch("Advert/setAdverts");
    // store.dispatch("Service/setServices");
    // store.dispatch("Hero/setHeros");
    store.dispatch("Route/getAll");
    // store.dispatch("Partner/setPartners");
    // store.dispatch("Gallary/setGallaries");
    // this.video();
  },
};
</script>
