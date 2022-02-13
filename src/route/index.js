import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:() => import('@/pages/index.vue'),
    },
    {
        path:'/maps',
        component:() => import('@/pages/game/maps.vue'),
    },
    {
        path:'/chat',
        component:() => import('@/pages/demo.vue'),
    },{
        path:'/role',
        component:() => import('@/pages/role.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
});

export default router;