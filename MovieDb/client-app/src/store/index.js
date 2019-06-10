import vue from 'vue';
import vuex from 'vuex';

import moviesModule from './modules/movies';
import actorsModule from './modules/actors';
import movieActorsModule from './modules/movieActors';

vue.use(vuex);

const store = new vuex.Store({
  modules: {
    movies: moviesModule,
    actors: actorsModule,
    movieActors: movieActorsModule,
  },
});

export default store;
