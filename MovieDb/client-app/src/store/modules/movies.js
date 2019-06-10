import axios from 'axios';

export default {
  namespaced: true,
  state: {
    movies: [],
  },
  actions: {
    AddMovie({ dispatch }, movie) {
      axios.post('https://localhost:44365/api/movies', movie)
        .then(() => dispatch('AllMovies'));
    },
    AllMovies({ commit }) {
      axios.get('https://localhost:44365/api/movies')
        .then(results => commit('AllMovies', results.data));
    },
  },
  getters: {
    addedMovie(state) {
      return state.movies[state.movies.length - 1];
    },
  },
  mutations: {
    AllMovies(state, movies) {
      state.movies = movies;
    },
  },
};
