import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import ChildComp from "./components/ChildComp.vue";
import router from "./router";

createApp(App)
  // Registering the ChildComp component globally
  // parametri i pare tagu se qysh ka mu thirr ne html
  // parametri i dyte komponenta qe do ta perdorim
  .component("ChildComp", ChildComp)
  .use(router) // use the router
  .mount("#app");
