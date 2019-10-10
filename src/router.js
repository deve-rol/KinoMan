import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Киноман',
            component: () => import('./views/home/index.vue'),
            children: [
                {
                    path: '/',
                    name: 'Главная',
                    component: () => import('./views/movies/index.vue'),
                },
                {
                    path: '/:genres_id',
                    name: 'Категории',
                    component: () => import('./views/movies/genres/index.vue'),
                }
            ]
        },
    ]
});

export default router;