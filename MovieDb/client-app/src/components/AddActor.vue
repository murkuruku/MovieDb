<template>
  <div>
      <form>
      <div class="form-group">
        <label >Name</label>
        <input v-model="actor.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Age</label>
        <input v-model="actor.age" type="number" class="form-control">
      </div>
      <div class="form-group">
        <h2>Movies</h2>
        <div v-for="(movie, index) in selectedMovies" :key="index" >
          <input type="checkbox" v-model="movie.selected">
          <label for="checkbox">{{movie.title}}</label>
        </div>
      </div>
      <div class="btn btn-group-lg btn-danger" @click="addActor(actor)">
        submit
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'AddActor',
  created() {
    if(this.allMovies.length == 0){
      this.AllMovies();
    }
    this.AllActors();
  },
  computed: {
    ...mapState('movies',{allMovies: 'movies'}),
    ...mapGetters('movies',{ selectedMovies: 'selectedMovies'}),
    ...mapGetters('actors', {lastId: 'lastId'}),

     },
  data() {
    return {
      actor: {
        name: '',
        age: '',
        movieActors:[],
      },
    };
  },
  methods: {
    ...mapActions('actors', ['AddActor', 'AllActors']),
    ...mapActions('movies', ['AllMovies']),
    addActor(actor) {
      console.log(actor);
          if(this.SelectedMovies(this.selectedMovies, this.allMovies).length != 0){
            this.AddActor(this.select(actor))
          }else {
            this.AddActor(actor);
          };
    },
    SelectedMovies(selectedMv, allMv){
      var selected = [];
      for(let i = 0;i < selectedMv.length;i++){
        if(selectedMv[i].selected == true){
          for(let j=0;j<allMv.length; j++){
            if(selectedMv[i].id == allMv[j].movieId){
              selected.push(allMv[j]);
            }
          }
        }
      }

      return selected;
    },
    select(actor) {
        let movies = this.SelectedMovies(this.selectedMovies, this.allMovies);
        for(let i = 0; i< movies.length; i++){
           actor.movieActors.push({
             actorId: this.lastId + 1,
             movieId: movies[i].movieId,
           });
        };
        return actor;
    },
  },
};
</script>

<style >

</style>
