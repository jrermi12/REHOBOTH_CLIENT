<template>
  <section id="routes">
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:flex-col sm:align-center">
          <h1 class="text-5xl font-extrabold text-indigo-700 sm:text-center">
            Available Routes
          </h1>
          <p class="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
        <div
          class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
        >
          <div
            v-for="route in routes"
            :key="route._id"
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
          >
            <div class="p-6">
            

              <p class="mt-8">
                <span class="text-3xl font-extrabold text-indigo-700"
                  >From {{ route.startingPoint }}</span
                >

                <!-- <span class="text-base font-medium text-gray-500">To</span> -->
                <span class="text-3xl font-extrabold text-indigo-700">
                  To {{ route.endingPoint }}</span
                >
              </p>

              <p class="">
                <span class="text-xl justify-end font-extrabold text-indigo-900"
                  >ETB {{ route.price }}/mo</span
                >
              </p>

              <router-link
                v-on:click="EdittoggleModal()"
                :to="{
                  params: {
                    id: route._id,
                  },
                }"
                class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
              >
                Register
              </router-link>
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3
                class="text-xs font-medium text-indigo-700 tracking-wide uppercase"
              >
                Path
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="path in route.path"
                  :key="path._id"
                  class="flex space-x-3"
                >
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-900">{{ path.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                            <form
                              @submit.prevent="registerCustomer"
                              class="my-8 text-sm"
                            >
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
  computed: {
    routes() {
      return store.state.Route.allRoutes;
    },
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

  beforeMount() {
    store.dispatch("Route/getAll");
  },
};
</script>
