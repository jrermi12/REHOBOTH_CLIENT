import axios from "axios";

// const baseURL = process.env.VUE_APP_API_BASE_URL;

const baseURL = process.env.VUE_APP_API_BASE_URL;

export default {
  namespaced: true,
  state: {
    allRoutes: [],
    route: "",
  },
  mutations: {
    SET_ALL_ROUTES(state, payload) {
      state.allRoutes = payload;
    },
    SET_ROUTE(state, payload) {
      state.route = payload;
    },
  },
  actions: {
    async getAll(context) {
         await axios
           .get(`${baseURL}/api/v1/route/get`, )
           .then(async (res) => {
             if (res.status === 200) {
               context.commit("SET_ALL_ROUTES", res.data);
             }
           })
           .catch((err) => {
           console.log("Error",err)
           });
       },
    async create(context, ContactData) {
      await axios
        .post(`${baseURL}/api/v1/contact/create`, ContactData)
        .then(async (res) => {
          if (res.status === 200) {
            console.log("asdnakdsh sauds ");
            // store.dispatch("Contact/setAllContacts");
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  },
  getters: {},
};
