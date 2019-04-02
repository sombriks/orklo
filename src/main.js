import { version } from "../package.json";

console.log(`this is orklo [${version}]`);

import Vue from "vue";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

import { WlCard, WlForm, WlStats, WlTime } from "./components";

Vue.component("wl-form", WlForm);
Vue.component("wl-card", WlCard);
Vue.component("wl-stats", WlStats);
Vue.component("wl-time", WlTime);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  name: "orklo",
  store,
  render: h => h(App)
});
