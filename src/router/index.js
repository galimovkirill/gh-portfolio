import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AppLayout from "@/layouts/App";
import SingleLayout from "@/layouts/Single";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: AppLayout,
        children: [
            { path: "/", component: Home },
            { path: "/about", component: () => import("../views/About.vue") },
            {
                path: "/portfolio",
                component: () => import("../views/Portfolio.vue")
            }
        ]
    },
    // {
    //     path: "/",
    //     component: Home
    // },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/About.vue")
    // },
    // {
    //     path: "/portfolio",
    //     name: "Portolfio",
    //     component: () => import("../views/Portfolio.vue")
    // },
    {
        path: "/contact",
        component: SingleLayout,
        children: [
            {
                path: "",
                component: () => import("../views/ContactMe.vue")
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
