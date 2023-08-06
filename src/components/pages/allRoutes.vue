<template>
  <section>
    <landingPage></landingPage>
    <div class="relative">
      <h2
        class="w-full text-3xl font-bold text-center text-indigo-700 sm:text-4xl md:text-5xl"
      >
        Available Routes
      </h2>
      <p
        class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-900 intro sm:max-w-3xl"
      >
        Rehoboth was founded to help parents provide safe, reliable
        transportation for their children to and from school. We know getting
        the kids out the door on time can be stressful. Our service handles the
        school commute so you don&apos;t have to
      </p>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <ul
      role="list"
      class="grid grid-cols-1 p-4 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="route in routes"
        :key="route._id"
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">
                From {{ route.startingPoint }} to {{ route.endingPoint }}
              </h3>
              <span
                class="flex-shrink-0 inline-block px-2 py-0.5 text-gray-900 text-xs font-mediumrounded-full"
                >{{ route.description }}</span
              >
            </div>
            <ul>
              <li class="flex" v-for="path in route.path" :key="path._id">
                <svg
                  class="h-6 w-6 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="mt-1 text-gray-500 text-sm truncate">
                  {{ path.name }}
                </p>
              </li>
            </ul>
          </div>
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-md font-medium truncate">Price:</h3>
            <span
              class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-md font-medium bg-green-100 rounded-full"
              >{{ route.price }}</span
            >
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <router-link
                v-on:click="EdittoggleModal()"
                :to="{
                  params: {
                    id: route._id,
                  },
                }"
              >
                <div class="flex justify-center">
                  <!-- Heroicon name: solid/mail -->
                  <svg
                    class="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                  <span class="ml-3">Register</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </li>

      <!-- More people... -->
    </ul>

    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

    <!-- CREATE HERO MODAL STARTS HERE-->
    <div
      v-if="EditshowModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
        >
          <div class="relative p-6 flex-auto">
            <div
              class="fixed inset-0 overflow-hidden"
              aria-labelledby="slide-over-title"
              role="dialog"
              aria-modal="false"
            >
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0" aria-hidden="true"></div>

                <div
                  class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
                >
                  <div class="pointer-events-auto w-screen max-w-md">
                    <div
                      class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                    >
                      <div class="h-0 flex-1 overflow-y-auto">
                        <div class="bg-indigo-700 py-6 px-4 sm:px-6">
                          <div class="flex items-center justify-between">
                            <h2
                              class="text-lg font-medium text-white"
                              id="slide-over-title"
                            >
                              Register
                            </h2>
                            <div class="ml-3 flex h-7 items-center">
                              <button
                                v-on:click="EdittoggleModal()"
                                type="button"
                                class="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              >
                                <span class="sr-only">Close panel</span>
                                <!-- Heroicon name: outline/x -->
                                <svg
                                  class="h-6 w-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div class="mt-1">
                            <p class="text-sm text-indigo-300">
                              Get started by filling in the information below to
                              create your new project.
                            </p>
                          </div>
                        </div>
                        <div class="flex flex-1 flex-col justify-between">
                          <div class="divide-y divide-gray-200 px-4 sm:px-6">
                            <!-- <form @submit.prevent="registerCustomer" class="mt-6"> -->
                              {{ this.$route.params.id}}
                            <form
                              @submit.prevent="registerCustomer"
                              class="my-8 text-sm"
                            >
                              <!-- <div class="flex flex-col my-4">
                                <label for="parent-name" class="text-gray-700"
                                  >Route</label
                                >
                                <input
                                  type="text"
                                  id="route"
                                  v-model="routeId"
                                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                  placeholder="route"
                                />
                              </div> -->
                              <div class="flex flex-col my-4">
                                <label for="parent-name" class="text-gray-700"
                                  >Parent Name</label
                                >
                                <input
                                  type="text"
                                  id="parent-name"
                                  v-model="parentName"
                                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                  placeholder="parent-name"
                                />
                              </div>

                              <div class="flex flex-col my-4">
                                <label for="email" class="text-gray-700"
                                  >Phone Number</label
                                >
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  v-model="phoneNumber"
                                  placeholder="phone-number"
                                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                />
                              </div>

                              <div class="flex flex-col my-4">
                                <label for="childName" class="text-gray-700"
                                  >Child Name</label
                                >
                                <input
                                  type="text"
                                  id="childName"
                                  v-model="childName"
                                  placeholder="child-name"
                                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                />
                              </div>

                              <div class="flex flex-col my-4">
                                <label for="childAge" class="text-gray-700"
                                  >Child Age</label
                                >
                                <input
                                  type="text"
                                  id="childAge"
                                  v-model="childAge"
                                  placeholder="child-age"
                                  class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                />
                              </div>

                              <div
                                class="flex flex-shrink-0 justify-end px-4 py-4"
                              >
                                <button
                                  v-on:click="EdittoggleModal()"
                                  type="button"
                                  class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  Save
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--footer-->
        </div>
      </div>
    </div>
    <div
      v-if="EditshowModal"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>
    <!-- CREATE HERO MODAL ENDSS HERE-->
  </section>
</template>
<script>
import landingPage from "./landingPage.vue";
import store from "@/store";
export default {
  data() {
    return {
      showModal: false,
      EditshowModal: false,
      parentName: "",
      childName: "",
      childAge: "",
      routeId: this.$route.params.id,
      phoneNumber: "",
    };
  },
  components: {
    landingPage,
  },
  computed: {
    routes() {
      return store.state.Route.allRoutes;
    },
  },
  beforeMount() {
    store.dispatch("Route/getAll");
  },

  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    EdittoggleModal: function () {
      this.EditshowModal = !this.EditshowModal;
    },

    registerCustomer() {
      const customerData = {
        parentName: this.parentName,
        childName: this.childName,
        childAge: this.childAge,
        routeId: this.$route.params.id,
        phoneNumber: this.phoneNumber,
      };

      store.dispatch("Customer/create", customerData);
    },
  },
};
</script>
