<template>
  <div>
    <h1>Add Movie</h1>
    <form >
      <div>
        <label>Title</label>
        <input v-model="movie.title" type="text" name="Title" v-validate="'required'"
        :class="{'form-control': true, 'error': errors.has('Title') }">
        <span v-show="errors.has('Title')" class="text-danger">{{ errors.first('Title') }}</span>
      </div>
      <div class="form-group"  >
        <label class="control-label" for="Releas Year">Releas Year</label>
        <input v-model="movie.releasYear" type="age" v-validate="'required|releasYear:1888'" name="Releas Year"
        class="form-control" :class="{'error': errors.has('Releas Year')}">
       <span v-show="errors.has('Releas Year')" class="text-danger">{{ errors.first('Releas Year') }}</span>
      </div>
      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Genre</label>
          </div>
          <select class="custom-select" v-model="movie.genre">
            <option value="None"  >None</option>
            <option  value="Action">Action</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drama">Drama</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <h2>Actors</h2>
        <div v-for="(actor, index) in selectedActors" :key="index">
          <input type="checkbox" v-model="actor.selected">
          <label for="checkbox">{{actor.name}}</label>
        </div>
      </div>
      <div class="btn btn-group-lg btn-danger"   @click="addMovie(movie)">Add movie</div>
      <div class="btn btn-group-lg btn-primary"  @click="navigation('MovieDb')">Cancel</div>
    </form>
  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex';
import {CommonMethods} from '../mixins/CommonMethods';
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  name: 'AddMovie',
  data() {
    return {
      movie: {
        title: '',
        releasYear: '',
        genre: 'None',
        movieActors: [],
      },
    };
  },
  computed: {
  ...mapState('actors', { allActors: 'actors' }),
  ...mapGetters('actors',{ selectedActors: 'selectedActros'}),
  ...mapGetters('movies',{ lastId: 'lastId'}),
  },
  mixins:[CommonMethods],
  created() {
    this.AllActors();
    this.AllMovies();
  },
  methods: {
    addMovie(movie) {
       const actors = this.selectedObj(this.selectedActors, this.allActors);
      this.$validator.validateAll().then(results => {
        if(results){
          if(actors.length != 0) {
              this.AddMovie(this.select(movie,this.lastId,actors));
            } else {
              this.AddMovie(movie);
            };
            this.navigation('MovieDb');
          }
      });
    },
    ...mapActions('movies', ['AddMovie','AllMovies']),
    ...mapActions('actors', ['AllActors']),
  }
};
</script>

<style  scoped>
.error {
      border-color: #E84444;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(232,68,68,.6);
    }
</style>
