import { version } from "../package.json";

console.log(`this is orklo [${version}]`);

import Vue from "vue";
import store from "./store";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  name: "orklo",
  store,
  render: h => h(App)
});
