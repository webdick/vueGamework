import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:() => import('@/pages/index.vue'),
    },
    {
        path:'/config',
        component:() => import('@/pages/config.vue'),
    },
    {
        path:'/chat',
        component:() => import('@/pages/game/chat.vue'),
    },
    {
        path:'/maps',
        component:() => import('@/pages/game/maps.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
});

export default router;