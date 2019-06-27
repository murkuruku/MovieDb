import axios from 'axios';

export default {
  namespaced: true,
  state: {
    actors: [],
    showActors: [],
  },
  actions: {
    AddActor({ dispatch }, actor) {
      axios.post('https://localhost:5001/api/actors', actor)
        .then(() => dispatch('AllActors'));
    },
    AllActors({ commit }) {
      axios.get('https://localhost:5001/api/actors')
        .then(result => commit('allActors', result.data));
    },
    ShowActors({ commit }) {
      axios.get('https://localhost:5001/api/actors/all')
        .then(results => commit('showActors', results.data));
    },
    DeleteActor({ dispatch }, actorId) {
      const url = `https://localhost:5001/api/actors/${actorId}`;
      axios.delete(url)
        .then(() => dispatch('AllActors'));
    },
    EditActor({ dispatch }, actor) {
      const url = `https://localhost:5001/api/actors/${actor.actorId}`;
      axios.put(url, actor)
        .then(() => dispatch('ShowActors'));
    },
  },
  mutations: {
    allActors(state, actors) {
      state.actors = actors;
    },
    showActors(state, actors) {
      state.showActors = actors;
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
    lastId(state) {
      let id;
      if (state.actors.length === 0) {
        id = 0;
      } else {
        id = state.actors[state.actors.length - 1].actorId;
      }
      return id;
    },
  },
};
