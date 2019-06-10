import axios from 'axios';

export default {
  namespaced: true,
  state: {
    actors: [],
  },
  actions: {
    AddActor({ dispatch }, actor) {
      axios.post('https://localhost:44365/api/actors', actor)
        .then(() => dispatch('AllActors'));
    },
    AllActors({ commit }) {
      axios.get('https://localhost:44365/api/actors')
        .then(result => commit('allActors', result.data));
    },
  },
  mutations: {
    allActors(state, actors) {
      state.actors = actors;
    },
  },
  getters: {
    selectedActros(state) {
      return state.actors.map((actor) => {
        const act = {
          id: actor.actorId,
          name: actor.name,
          age: actor.age,
          selected: false,
        };
        return act;
      },
      );
    },
  },
};
