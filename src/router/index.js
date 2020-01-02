import Vue from 'vue'
import VueRouter from "vue-router";
import about from "../js/views/about";
import home from "../js/views/home";

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
        }
    ]
});

export default router;
