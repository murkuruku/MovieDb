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
        .then(() => dispatch('ShowMovies'));
    },
    AllMovies({ commit }) {
      axios.get('https://localhost:5001/api/movies')
        .then(results => commit('allMovies', results.data));
    },
    ShowMovies({ commit }) {
      console.log('pisam');
      axios.get('https://localhost:5001/api/movies/all')
        .then(result => commit('yo', result.data));
    },
    EditMovie({ dispatch }, movie) {
      const url = `https://localhost:5001/api/movies/${movie.movieId}`;
      axios.put(url, movie)
        .then(() => dispatch('ShowMovies'));
    },
    DeleteMovie({ dispatch }, movie) {
      const url = `https://localhost:5001/api/movies/${movie.movieId}`;
      axios.delete(url)
        .then(() => dispatch('ShowMovies'));
    },
  },
  getters: {
    lastId(state) {
      let id;
      if (state.movies.length === 0) {
        id = 0;
      } else {
        id = state.movies[state.movies.length - 1].movieId;
      }
      return id;
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
    yo(state, movies) {
      console.log(movies);
      state.showMovies = movies;
    },
  },
};
