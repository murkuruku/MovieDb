<template>
  <div>
    <form>
      <div class="form-group">
        <label>Title</label>
        <input v-model="movie.title" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Releas Year</label>
        <input v-model="movie.releasYear" type="number" class="form-control">
      </div>
      <div class="form-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">Genre</label>
          </div>
          <select class="custom-select" v-model="movie.genre">
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
  ...mapGetters('movies',{ lastId: 'lastId'}),
  },
    created() {
      if(this.AllActors.length == 0){
        this.AllActors();
      };
      this.AllMovies();
  },
  methods: {
    ...mapActions('movies', ['AddMovie','AllMovies']),
    ...mapActions('actors', ['AllActors']),

    addMovie(movie) {
      console.log(movie);
      if(this.SelectedActors(this.selectedActors, this.allActors).length != 0)
        {
          this.AddMovie(this.select(movie));
        } else {
          this.AddMovie(movie);
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
           movie.movieActors.push({
             actorId: actors[i].actorId,
             movieId: this.lastId + 1,
           });
        };
        return movie;
    },
  },
  data() {
    return {
      movie: {
        // movieId: 1,
        title: '',
        releasYear: '',
        genre: '',
        movieActors: [],
      },
    };
  }
};
</script>

<style>
</style>
