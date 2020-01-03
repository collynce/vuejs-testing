import Vue from 'vue'
import VueRouter from "vue-router";
import about from "../js/views/about";
import data from "../js/views/data";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes: [
        // {
        //    path: '/',
        //    component: home
        // },
        {
            path:'/about',
            component:about
        },
        {
            path: '/data',
            component: data
        },
    ]
});

export default router;
