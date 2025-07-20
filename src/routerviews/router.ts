import { createRouter, createWebHistory } from "vue-router";

import CalculateShopListView from "@/components/CalculateShopList.vue";
import AppView from "@/components/Home.vue";

const routes = [
  { path: "/", component: AppView },
  { path: "/shoplist", component: CalculateShopListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
