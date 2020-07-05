import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import PageNotFound from '../pages/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/post',
      component: Post,
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
