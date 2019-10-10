import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

let router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: () => import('./views/home/index.vue'),
            children: [
                {
                    path: '/',
                    name: 'Kinoman',
                    component: () => import('./views/movies/index.vue'),
                },
                {
                    path: '/genres/:genres_id',
                    name: 'Genres',
                    component: () => import('./views/movies/genres/index.vue'),
                },
                {
                    path: '/movie/:movie_id',
                    name: 'Present',
                    component: () => import('./views/movies/present_movie.vue'),
                }
            ]
        },
    ]
});
router.beforeEach( (to, from, next) => {
   next()
});

export default router;