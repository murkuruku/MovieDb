<template>
  <div>
    <h1>Edit Movie</h1>
    <form>
      <div class="form-group">
        <label>Title</label>
        <input type="text" v-model="movie.title" class="form-control">
      </div>
      <div class="form-group">
        <label>Release Year</label>
        <input type="number" v-model="movie.releasYear"  class="form-control">
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
        <div class="btn btn-warning btn-group-long" @click="navigation()">Cancel</div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name:'EditMovie',
    computed: {
      ...mapState('movies', {ShowMovies:'showMovies'}),
      mv(){
        let movie = this.ShowMovies.find(movie => movie.movieId === this.$route.params.id);
        return movie;
      },
      ...mapGetters('actors',{ selectedActors: 'selectedActros'}),
    },
    created(){
      this.AllActors();
    },
    beforeUpdate() {
      this.selectedAct();
      this.values();
    },
    methods: {
      navigation(){
        this.$router.push({name: 'MovieDb'});
      },
      Edit(movie){
        this.EditMovie(this.select(movie));
        this.navigation();
        },
      SelectedActors(selectedActors, allActors){
      var selected = [];
      for(let i = 0;i < selectedActors.length;i++){
        if(selectedActors[i].selected == true){
          for(let j=0;j<allActors.length; j++){
            if(selectedActors[i].id == allActors[j].actorId){
              selected.push(allActors[j]);
            }
          }
        }
      }
      return selected;
    },
    select(movie) {
        let actors = this.selectedActors;
        for(let i = 0; i< actors.length; i++){
          if(actors[i].selected == true){
            movie.movieActors.push({
              actorId: actors[i].id,
               movieId: this.movie.movieId,
           });
          }
        };
        return movie;
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
        this.movie.title = this.mv.movieTitle;
        this.movie.releasYear = this.mv.movieReleas;
        this.movie.genre = this.genre(this.mv.movieGenre);
        this.movie.movieActors= [];
      },
      ...mapActions('actors', ['AllActors']),
      ...mapActions('movies', ['EditMovie']),
      selectedAct(){
        for(let i =0; i< this.mv.actors.length; i++){
          this.selectedActors.forEach(act => {
            if(this.mv.actors[i].id === act.id){
              act.selected = true;
               }
              }
            );
          }
        },
      },
    data(){
      return {
          movie: {}
    }
    }
  }
</script>

<style  scoped>

</style>
