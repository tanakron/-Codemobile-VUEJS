import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import "intersection-observer"; // Optional
// import { LayoutPlugin } from "bootstrap-vue";
// Vue.use(LayoutPlugin);
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
createApp(App).use(store).use(router).mount("#app");
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);
