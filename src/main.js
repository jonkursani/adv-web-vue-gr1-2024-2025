import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import "./assets/app.css";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import ChildComp from "./components/ChildComp.vue";
import router from "./router";
import { createPinia } from "pinia";

createApp(App)
  // Registering the ChildComp component globally
  // parametri i pare tagu se qysh ka mu thirr ne html
  // parametri i dyte komponenta qe do ta perdorim
  .component("ChildComp", ChildComp)
  .use(router) // use the router
  .use(createPinia()) // use the pinia store
  .mount("#app");
