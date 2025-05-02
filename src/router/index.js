import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddPersonView from "@/views/people/AddPersonView.vue";
import PeopleView from "@/views/people/PeopleView.vue";
import UpdatePersonView from "@/views/people/UpdatePersonView.vue";
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
  {
    path: "/people",
    name: "people",
    component: PeopleView,
  },
  {
    path: "/people/add",
    name: "add-person",
    component: AddPersonView,
  },
  {
    path: "/people/:id",
    name: "update-person",
    component: UpdatePersonView,
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
