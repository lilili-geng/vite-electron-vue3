import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/login.vue"),
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
