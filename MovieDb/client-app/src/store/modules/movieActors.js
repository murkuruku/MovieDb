import axios from 'axios';

export default {
  namespaced: true,
  state: {
    movieActors: [],
  },
  actions: {
    AddMovieActors(MovieActor) {
      axios.post('https://localhost:44365/api/movieActors', MovieActor)
        .then(() => console.log('paejo!!!'));
    },
  },
  mutations: {},
  getters: {},
};
