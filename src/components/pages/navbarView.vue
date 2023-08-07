
<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-100 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">rehoboth</span>
            <img class="h-20 w-auto" src="../../../public/logo.jpg" alt="" />
          </a>
        <button class="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row gap-4 lg:gap-8 list-none ml-auto">
          <li class="nav-item">
            <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
          </li>
          <li class="nav-item">
            <a href="/#about" class="text-sm font-semibold leading-6 text-gray-900">About</a>
          </li>
            <li class="nav-item">
              <a href="/#service" class="text-sm font-semibold leading-6 text-gray-900">Services</a>
            </li>
            <li class="nav-item">
              <a href="/routes" class="text-sm font-semibold leading-6 text-gray-900">Routes</a>
            </li>
            <li class="nav-item">
              <a href="/#contact" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
            </li>
            <li class="nav-item">
              <a href="/routes" class="text-sm font-semibold leading-6 text-gray-900">Register</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>


