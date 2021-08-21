import {createRouter, createWebHashHistory} from 'vue-router'
import Main from "../views/Main";
console.log(Main)
const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        component: Main,
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
