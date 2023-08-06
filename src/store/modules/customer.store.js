import axios from "axios";

// const baseURL = process.env.VUE_APP_API_BASE_URL;

const baseURL = process.env.VUE_APP_API_BASE_URL;
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
export default {
  namespaced: true,
//   state: {
//     allContacts: [],
//     contact: "",
//   },
//   mutations: {
//     SET_ALL_CONTACTS(state, payload) {
//       state.allContacts = payload;
//     },
//     SET_CONTACT(state, payload) {
//       state.contact = payload;
//     },
//   },
  actions: {
    async create(context, customerData) {
      await axios
        .post(`${baseURL}/api/v1/customer/create`, customerData)
        .then(async (res) => {
          if (res.status === 201) {
            toast.success(res.data.message, {
                autoClose: 2000, position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
            });
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  },
  getters: {},
};
