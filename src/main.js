import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./miragejs/server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
