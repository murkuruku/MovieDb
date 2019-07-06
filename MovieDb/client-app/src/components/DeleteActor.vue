<template>
  <div >
    <div class="del" @click="delActInMv(Movie, Actor)"> Delete {{Actor.name}} from {{Movie.title}} </div>
    <div class="del" @click="delAct(Actor)">Delete {{Actor.name}} from all movies </div>
    <div class="cancel" @click="cancel()"> Cancel</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'DeleteActor',
  props: ['Movie', 'Actor'],
  computed: {
    ...mapState('movies', {movies: 'movies'}),
  },
  created(){
    this.AllMovies();
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
      for(let j = 0 ; j < Movie.movieActors.length; j++){
        if(Actor.actorId != Movie.movieActors[j].actorId){
          mv.movieActors.push({
            actorId: Movie.movieActors[j].actorId,
            movieId: mv.movieId,
          });
        }
      }
      this.EditMovie(mv);
      this.cancel();
    },
    delAct(Actor){
      this.DeleteActor(Actor.actorId);
      this.ShowMovies();
      this.cancel();
    }
  }
}
</script>

<style  scoped>

</style>
