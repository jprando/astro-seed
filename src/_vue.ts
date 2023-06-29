import type Vue from "vue";

import Primevue from "primevue/config";

import "primevue/resources/primevue.min.css";

export default (app: Vue.App) => {
  app.use(Primevue);
};
