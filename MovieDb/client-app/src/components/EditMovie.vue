<template>
  <div>
    <h1>Edit Movie</h1>
    <form>
      <div class="form-group">
        <label>Title</label>
        <input type="text" name="Title" v-model="movie.title" class="form-control" v-validate="'required'"
        :class="{'form-control': true, 'error': errors.has('Title') }" />
        <span v-show="errors.has('Title')" class="text-danger">{{ errors.first('Title') }}</span>
      </div>
      <div class="form-group">
        <label>Release Year</label>
        <input name="Releas Year" type="age" v-model="movie.releasYear"  class="form-control" v-validate="'required|releasYear:1888'"
        :class="{'form-control': true, 'error': errors.has('Releas Year') }" >
        <span v-show="errors.has('Releas Year')" class="text-danger">{{ errors.first('Releas Year') }}</span>
      </div>
      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Genre</label>
          </div>
          <select class="custom-select" v-model="movie.genre">
            <option  >None</option>
            <option >Action</option>
            <option  >Fantasy</option>
            <option  >Drama</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <h2>Actors</h2>
        <div v-for="(actor,index) in selectedActors" :key="index">
          <input type="checkbox" :checked="actor.selected" v-model="actor.selected">
          <label>{{actor.name}}</label>
        </div>
      </div>
      <div>
        <div class="btn btn-danger btn-group-long" @click="Edit(movie)">Edit</div>
        <div class="btn btn-warning btn-group-long" @click="navigation('MovieDb')">Cancel</div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import {CommonMethods} from '../mixins/CommonMethods';
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  name:'EditMovie',
  computed: {
    ...mapState('movies', {ShowMovies:'showMovies'}),
    ...mapState('actors', {allActors: 'actors'}),
    mv(){
      let movie = this.ShowMovies.find(movie => movie.movieId === this.$route.params.id);
      return movie;
    },
    ...mapGetters('actors',{ selectedActors: 'selectedActros'}),
  },
  data(){
    return {
        movie: {}
    }
  },
  mixins:[CommonMethods],
  beforeMount() {
    this.values();
  },
  beforeUpdate() {
    this.selectedAct();
  },
  methods: {
    selectedAct() {
      for(let i =0; i< this.mv.movieActors.length; i++){
        this.selectedActors.forEach(act => {
          if(this.mv.movieActors[i].actorId === act.id){
            act.selected = true;
          }
        });
      }
    },
    Edit(movie){
      const actors = this.selectedObj(this.selectedActors, this.allActors);
      const movieId = this.movie.movieId -1;
      this.$validator.validateAll().then((results) => {
        if(results){
          this.EditMovie(this.select(movie, movieId, actors));
          this.navigation('MovieDb');
        }
      })
      },
    genre(x) {
      switch(x) {
        case 1:
          return this.Genre = "Action";
        case 2:
          return this.Genre = "Fantasy";
        case 3:
            return this.Genre = "Drame";
        default:
          return this.Genre = "None";
      }
    },
    values(){
      this.movie.movieId = this.mv.movieId;
      this.movie.title = this.mv.title;
      this.movie.releasYear = this.mv.releasYear;
      this.movie.genre = this.genre(this.mv.genre);
      this.movie.movieActors= [];
    },
    ...mapActions('movies', ['EditMovie']),
   },
}
</script>

<style  scoped>

</style>
