import axios from 'axios';

export default {
  namespaced: true,
  state: {
    movies: [],
    showMovies: [],
  },
  actions: {
    AddMovie({ dispatch }, movie) {
      axios.post('https://localhost:5001/api/movies', movie)
        .then(() => dispatch('AllMovies'));
    },
    AllMovies({ commit }) {
      axios.get('https://localhost:5001/api/movies')
        .then(results => commit('allMovies', results.data));
    },
    ShowMovies({ commit }) {
      axios.get('https://localhost:5001/api/movies/all')
        .then(result => commit('ShowMovies', result.data))
    },
  },
  getters: {
    lastId(state) {
      return state.movies[state.movies.length - 1].movieId;
    },
    selectedMovies(state) {
      return state.movies.map((movie) => {
        const act = {
          id: movie.movieId,
          title: movie.title,
          releasYear: movie.releasYear,
          genre: movie.genre,
          selected: false,
        };
        return act;
      },
      );
    },
  },
  mutations: {
    allMovies(state, movies) {
      state.movies = movies;
    },
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    ShowMovies(state, movies) {
      state.showMovies = movies;
    }
  },
};
