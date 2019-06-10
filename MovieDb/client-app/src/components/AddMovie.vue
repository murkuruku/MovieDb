<template>
  <div>
    <form>
      <div class="form-group">
        <label>Titlee</label>
        <input v-model="movie.Title" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Releas Year</label>
        <input v-model="movie.ReleasYear" type="number" class="form-control">
      </div>
      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Genre</label>
          </div>
          <select class="custom-select" v-model="movie.Genre">
            <option value="None">None</option>
            <option value="Action">Action</option>
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
      <div
        class="btn btn-group-lg btn-danger"
        @click="addMovie(movie)"
      >submit</div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';


export default {
  name: 'AddMovie',
  computed: {
  ...mapState('actors', { allActors: 'actors' }),
  ...mapGetters('actors',{ selectedActors: 'selectedActros'}),
  ...mapGetters('movies', {addedMovie: 'addedMovie'})
  },
    created() {
        this.AllActors()
  },
  methods: {
    ...mapActions('movies', ['AddMovie']),
    ...mapActions('actors', ['AllActors']),
    ...mapActions('movieActors', ['AddMovieActors']),
    addMovie(movie) {
      this.AddMovie(movie);
      if(this.SelectedActors(this.selectedActors, this.allActors) != [])
        {
          this.select(this.addedMovie);
        };

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
        let actors = this.SelectedActors(this.selectedActors, this.allActors);
        for(let i = 0; i< actors.length; i++){
           let  movieActor = [movie];
            movieActor.push(actors[i]);
            this.AddMovieActors(movieActor);
        };
    },
  },
  data() {
    return {
      movie: {
        Title: '',
        ReleasYear: '',
         Genre: '',
      },
    };
  }
};
</script>

<style>
</style>
