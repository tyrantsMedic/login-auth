import { createRouter, createWebHistory } from "vue-router";
import MainLogin from "./layouts/MainLogin.vue";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Main",
            path: "/",
            component: MainLogin,
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
                }
            ]
        },
    ],
});

export default router;
