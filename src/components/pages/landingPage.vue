<template>

  <section id="home" class="bg-yellow-100 dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto  place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl  mb-4 text-4xl font-extrabold leading-none md:text-5xl text-indigo-700 xl:text-6xl dark:text-white"
        >
          Get Your Child to School Stress-Free
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-sm lg:text-lg dark:text-gray-400"
        >
          Stop the morning madness. Let us take your kids to school so you can
          have a stress-free morning routine. Our reliable drivers will pick
          your child up and drop them off on time, every time. 
        </p>
        <a
          href="#routes"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Regsiter
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <router-link
          to="/routes"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Find Route
        </router-link>
      </div>
      <Vue3Lottie :animationData="Animation" class="hidden lg:block" :height="550" :width="550" />
      <!-- <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
            </div>                 -->
    </div>
  </section>
</template>
<script>
import { Vue3Lottie } from "vue3-lottie";
import Animation from "../../assets/animation_lknqsz9c.json";
export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      Animation,
    };
  },
};
</script>
