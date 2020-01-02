import Vue from 'vue'
import router from "./router";
require('./js/components/components');
import './sass/main.scss'

new Vue({
    router,
    el: "#app"
});
