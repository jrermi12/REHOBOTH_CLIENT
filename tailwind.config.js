// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  content:  ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
      // require('@tailwindcss/forms'),
  ],
};
