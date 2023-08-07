<template>
  <!-- component -->
  <section id="about" class="py-20 bg-white">
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
      <div class="relative">
        <h2
          class="w-full text-3xl font-bold text-center text-indigo-700 sm:text-4xl md:text-5xl"
        >
          About Rehoboth
        </h2>
        <p
          class="w-full py-8 mx-auto -mt-2 text-sm lg:text-lg text-center text-gray-900 intro sm:max-w-3xl"
        >
          Rehoboth was founded to help parents provide safe, reliable
          transportation for their children to and from school. We know getting
          the kids out the door on time can be stressful. Our service handles
          the school commute so you don&apos;t have to
        </p>
      </div>
      <div class="flex flex-wrap flex-row -mx-4 text-center">
        <div
          class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s"
          style="
            visibility: visible;
            animation-duration: 1s;
            animation-delay: 0.1s;
            animation-name: fadeInUp;
          "
        >
          <!-- service block -->
          <div
            class="py-8 px-6 mb-12  bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <div class="inline-block  text-gray-900 mb-4">
              <!-- icon -->
              <Vue3Lottie
                :animationData="Animation1"
                :height="50"
                :width="50"
              />
            </div>
            <h3
              class="text-lg leading-normal mb-2 font-semibold text-indigo-700"
            >
              Our Mission
            </h3>
            <p class="text-sm lg:text-lg text-gray-500">
              The mission of Rehoboth is to provide safe, reliable
              transportation to take students to and from school, giving
              families peace of mind and easing the stress of the daily commute.
            </p>
          </div>
          <!-- end service block -->
        </div>
        <div
          class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s"
          style="
            visibility: visible;
            animation-duration: 1s;
            animation-delay: 0.1s;
            animation-name: fadeInUp;
          "
        >
          <!-- service block -->
          <div
            class="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <div class="inline-block text-gray-900 mb-4">
              <!-- icon -->
              <Vue3Lottie
                :animationData="Animation2"
                :height="50"
                :width="50"
              />
            </div>
            <h3
              class="text-lg leading-normal mb-2 font-semibold text-indigo-700"
            >
              Our Vision
            </h3>
            <p class="text-sm lg:text-lg text-gray-500">
              Our vision is to be the leading provider of student transportation
              services by delivering an exceptional experience that benefits
              both families and schools.
            </p>
          </div>
          <!-- end service block -->
        </div>
        <div
          class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s"
          style="
            visibility: visible;
            animation-duration: 1s;
            animation-delay: 0.3s;
            animation-name: fadeInUp;
          "
        >
          <!-- service block -->
          <div
            class="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <div class="inline-block text-gray-900 mb-4">
              <!-- icon -->
              <Vue3Lottie
                :animationData="Animation3"
                :height="80"
                :width="50"
              />
            </div>
            <h3
              class="text-lg leading-normal mb-2 font-semibold text-indigo-700"
            >
              Our Goal
            </h3>
            <p class="text-sm lg:text-lg text-gray-500">
              Our vision is to be the leading provider of student transportation
              services by delivering an exceptional experience that benefits
              both families and schools.
            </p>
          </div>
          <!-- end service block -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Vue3Lottie } from "vue3-lottie";
import Animation1 from "../../assets/animation_lkvh5xm7.json";
import Animation2 from "../../assets/animation_lkvh4rol.json";
import Animation3 from "../../assets/animation_lkvh77b4.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      Animation1,
      Animation2,
      Animation3,
    };
  },
};
</script>
