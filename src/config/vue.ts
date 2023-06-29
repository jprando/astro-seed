import type Vue from "vue";

import "primevue/resources/primevue.min.css";

import Primevue from "primevue/config";

import PrimevueLocale from "../assets/locales/primevue.pt.json";

export default (app: Vue.App) => {
  app.use(Primevue, { ripple: true, locale: PrimevueLocale });
};
