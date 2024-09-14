import { createRouter, createWebHistory } from "vue-router";
import Main from "./layouts/Main.vue";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Main",
            path: "/",
            component: Main,
            redirect: "/login",
            meta: {
                title: "Home",
            },
            children: [
                {
                    name: "Registration",
                    path: "/register",
                    component: Registration,
                    meta: {
                        title: "Register",
                    },  
                },
                {
                    name: "Login",
                    path: "/login",
                    component: Login,
                    meta: {
                        title: "Login",
                    },  
                },
                {
                    name: "Dashboard",
                    path: "/dashboard",
                    component: Login,
                    meta: {
                        title: "Dashboard",
                    },  
                }
            ]
        },
    ],
});

export default router;
