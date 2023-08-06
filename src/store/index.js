import { createStore } from "vuex";
import Contact from "./modules/contact.store";
import Route from "./modules/route.store";
import Customer from "./modules/customer.store";


// const  sidebarResponsiveness = () => {
//     if (window.visualViewport.width = 1024px)
// }

export default createStore({
  modules: {
    // auth,
    Contact:Contact,
    Route:Route, 
    Customer:Customer
  },
  state: {
    sideBarOpen: false,
   
},
getters: {
    sideBarOpen: state => {
        return state.sideBarOpen
    }
},
mutations: {
    toggleSidebar (state) {
        state.sideBarOpen = !state.sideBarOpen
    }
},
actions: {
    toggleSidebar(context) {
        context.commit('toggleSidebar')
    },
    
},
});
