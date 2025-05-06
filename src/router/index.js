import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddPersonView from "@/views/people/AddPersonView.vue";
import PeopleView from "@/views/people/PeopleView.vue";
import UpdatePersonView from "@/views/people/UpdatePersonView.vue";
import UserView from "@/views/UserView.vue";
import {createRouter, createWebHistory} from "vue-router";
import AuthView from "@/views/auth/AuthView.vue";
import {useAuthStore} from "@/stores/auth.js";

const routes = [
    {
        path: '/auth/login',
        name: 'login',
        component: AuthView,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/home",
        redirect: "/",
    },
    {
        path: "/about-us",
        name: "about",
        component: AboutView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/user/:id",
        name: "user",
        component: UserView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/people",
        name: "people",
        component: PeopleView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/people/add",
        name: "add-person",
        component: AddPersonView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/people/:id",
        name: "update-person",
        component: UpdatePersonView,
        meta: {
            requiresAuth: true,
        }
    },
    // catch all route
    {
        path: "/:notFound(.*)",
        component: NotFoundView,
        meta: {
            requiresAuth: true,
        }
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// navigatin guards
router.beforeEach((to, from) => {
    // console.log(`Navigating to ${to.path} from ${from.path}`);

    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
        return {
            name: 'login',
            query: {redirect: to.fullPath}
        }
    } else if (!to.meta.requiresAuth && authStore.isLoggedIn) {
        return {
            name: 'home'
        }
    }
    // next();
});

export default router;
