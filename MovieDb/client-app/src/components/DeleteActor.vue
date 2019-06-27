<template>
  <div class="d-flex">
    <div class="btn btn-primary" @click="delActInMv(Movie, Actor)"> Delete {{Actor.name}} from {{Movie.movieTitle}} </div>
    <div class="btn btn-primary" @click="delAct(Actor)">Delete {{Actor.name}} from all movies </div>
    <div class="btn btn-warning" @click="cancel()"> Cancel</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

  export default {
    name: 'DeleteActor',
    props: ['Movie', 'Actor'],
    created(){
      this.AllMovies();
    },
    computed: {
      ...mapState('movies', {movies: 'movies'}),

    },
    methods: {
      cancel() {
        this.$emit('cancel');
      },
      ...mapActions('movies', ['AllMovies','EditMovie', 'ShowMovies']),
       ...mapActions('actors', ['DeleteActor']),
      delActInMv(Movie, Actor) {
        let mv;
        for(let i=0;i < this.movies.length; i++) {
            if(Movie.movieId == this.movies[i].movieId){
              mv= this.movies[i];
            }
        }
        for(let j = 0 ; j < Movie.actors.length; j++){
          if(Actor.id != Movie.actors[j].id){
            mv.movieActors.push({
             actorId: Movie.actors[j].id,
             movieId: mv.movieId,
           });
          }
        }
        this.EditMovie(mv);
        this.cancel();
      },
      delAct(Actor){
        this.DeleteActor(Actor.id);
        this.ShowMovies();
        this.cancel();
      }
    }
  }
</script>

<style  scoped>

</style>
