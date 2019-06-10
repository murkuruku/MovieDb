import Vue from 'vue';
import Router from 'vue-router';

import MovieDb from '@/components/MovieDb';
import AddMovie from '@/components/AddMovie';
import AddActor from '@/components/AddActor';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MovieDb',
      component: MovieDb,
    },
    {
      path: '/addmovie',
      name: 'AddMovie',
      component: AddMovie,
    },
    {
      path: '/addactor',
      name: 'AddActor',
      component: AddActor,
    },
  ],
});
