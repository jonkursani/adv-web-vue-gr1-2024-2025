import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import UserView from "@/views/UserView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/about-us",
    name: "about",
    component: AboutView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: UserView,
  },
  // catch all route
  {
    path: "/:notFound(.*)",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// navigatin guards
router.beforeEach((to, from, next) => {
  console.log(`Navigating to ${to.path} from ${from.path}`);

  next();
});

export default router;
