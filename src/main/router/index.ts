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
    // {
    //     path: '/scendet/:index',
    //     component: ScenDet,
    // },
    // {
    //     path: '/intoscen/:index',
    //     component: IntoScen,
    // },
    // {
    //     path: '/hotelfood/:index',
    //     component: HotelFood,
    // },
    // {
    //     path: '/recentnew/:index',
    //     component: RecentNew,
    // },
    // {
    //     path: '/tripway/:index',
    //     component: TripWay,
    // },
    // {
    //     path: '/wujiangMijing/:index',
    //     component: wujiangMijing
    // }
]
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
