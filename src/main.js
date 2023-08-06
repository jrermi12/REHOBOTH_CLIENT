import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import axios from 'axios';

// import VeeValidate from 'vee-validate';
import errorHandler from "./error/error.middleware";
import "./assets/css/tailwind.css"

// import toast from 'vue-toast'
// import 'vue-toast/dist/index.css'
import Multiselect from "vue-multiselect";
import Toaster from "@meforma/vue-toaster";
const app = createApp(App);
app.config.errorHandler = errorHandler;
app.component("multi-select", Multiselect);
VueElement.prototype.$http = axios;
const token = localStorage.getItem("token")
var hours = 1;
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}


if(token){
    VueElement.prototype.$http.defaults.headers.common['Authorization'] = token;
}

app.use(store).use(router).use(Toaster).mount("#app");
