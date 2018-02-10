import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// const homeIndex = () => import('@/views/home/index');

const routes = [
    { path: '', redirect: { name: 'index' } },
    { path: '/index', component: () => import('@/views/home/index'), name: 'index' },
    { path: '/comps/loadmore', component: () => import('@/views/comps/loadmore'), name: 'loadmore' },
];
const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        const position = {};
        if (to.hash) {
            position.selector = to.hash;
        }
        position.x = 0;
        position.y = 0;
        return position;
    },
    routes,
});
router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((route) => {
    console.log(route);
});

export default router;
