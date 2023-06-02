import { createRouter, createWebHashHistory } from "vue-router";
const modules = import.meta.glob('../views/*/*.vue')

const routes = [
  {
    path: "/",
    component: () => import("../components/login.vue"),
  },
  {
    path: "/home",
    component: () => import("../views/home.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
