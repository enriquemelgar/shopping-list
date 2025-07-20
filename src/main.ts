import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routerviews/router.ts";

createApp(App).use(router).mount("#app");
