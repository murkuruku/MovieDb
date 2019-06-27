<template>
  <div>
    <h1>Edit Actor</h1>
     <form>
      <div class="form-group">
        <label >Name</label>
        <input v-model="actor.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Age</label>
        <input  v-model="actor.age" type="number" class="form-control">
      </div>
      <div class="form-group">
        <h2>Movies</h2>
        <div  v-for="(movie,x) in selectedMovies" :key="x">
          <input type="checkbox" :checked="movie.selected" v-model="movie.selected">
          <label >{{movie.title}}</label>
        </div>
      </div>
      <div class="btn btn-group-lg btn-danger" @click="editAct(actor)" >
        Edit Actor
      </div>
      <div class="btn btn-group-lg btn-primary" @click="navigation()" >
        Cancel
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex';
  export default {
    name: 'EditActor',
    computed: {
      ...mapState('actors',{ Actors: 'showActors'}),
      act() {
        console.log(this.Actors);
        let act = this.Actors.find(actor => actor.actorId === this.$route.params.id);
        return act;
      },
      ...mapGetters('movies', {selectedMovies: 'selectedMovies'}),
    },
    created() {
      this.AllMovies();
    },
    beforeUpdate() {
      this.values();
      this.selectedMv();
    },
    methods: {
      navigation(){
        this.$router.push({name: 'MovieDb'});
      },
      editAct(actor){
        this.EditActor(this.select(actor));
        this.navigation();
      },
      values() {
         console.log(this.act);
        this.actor.actorId = this.act.actorId;
        this.actor.name = this.act.name;
        this.actor.age = this.act.age;
        this.actor.movieActors = [];
      },
      ...mapActions('actors', ['EditActor']),
      ...mapActions('movies', ['AllMovies']),
      selectedMv(){
        for(let i =0; i< this.act.movies.length; i++){
          this.selectedMovies.forEach(mv => {
            if(this.act.movies[i].id === mv.id){
              mv.selected = true;
               }
              }
            );
          }
        },
         SelectedMovies(selectedMovies, allMovies){
      var selected = [];
      for(let i = 0;i < selectedMovies.length;i++){
        if(selectedMovies[i].selected == true){
          for(let j=0;j<allMovies.length; j++){
            if(selectedMovies[i].id == allMovies[j].movieId){
              selected.push(allMovies[j]);
            }
          }
        }
      }
      return selected;
    },
    select(actor) {
      let movies = this.selectedMovies;
        for(let i = 0; i< movies.length; i++){
          if(movies[i].selected == true){
            actor.movieActors.push({
              actorId: actor.actorId,
              movieId: movies[i].id,
           });
          }
        };
        return actor;
    },
    },
     data(){
      return {
          actor: {},
      };
    },
  }
</script>

<style scoped>

</style>
