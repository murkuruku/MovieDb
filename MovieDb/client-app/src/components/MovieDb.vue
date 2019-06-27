<template>
  <div>
    <div class="btn btn-success btn-group-long" @click="navigation('AddMovie')">Add new movie</div>
    <div class="btn btn-success btn-group-long" @click="navigation('AddActor')">Add new actor</div>
    {{allMovies}}
   <table class="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Release Date</th>
      <th>Genre</th>
      <th>Actors</th>
    </tr>
  </thead>
  <tbody v-for="(movie, index) in allMovies" :key="index">
    <tr>
      <td >{{movie.movieTitle}}</td>
      <td>{{movie.movieReleas}}</td>
      <td class="row">
        <div class="col">{{genre(movie.movieGenre)}}</div>
        <div class="col">
          <router-link class="btn btn-danger float-right  " :to="{name: 'EditMovie', params:{id: movie.movieId}}">edit</router-link>
          <div  class="btn btn-danger float-right" @click="delMv(movie)">delete</div>
        </div>
      </td>
      <td >
        <ul v-for="(actors, x) in movie.actors" :key="x" >
          <div class="d-inline"> {{actors.name}}</div>
          <router-link class="btn btn-danger float-right" :to="{name: 'EditActor', params:{id: actors.id}}">edit</router-link>
          <div class="btn btn-danger float-right" @click="delAct(movie.movieId, actors.id)"> delete</div>
        </ul>
      </td>
    </tr>
    <tr v-if="movie.movieId == showDelMv"  colspan="4">
      <deleteMovie :Movie="movie" @canceled="cacelel" ></deleteMovie>
    </tr>
    <tr v-for="(actors, x) in movie.actors" :key="x"  colspan="4">
      <deleteActor v-if="movie.movieId == showDelActMv && actors.id == showDelAct" :Movie="movie" :Actor="actors" @cancel="cacelel()"></deleteActor>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import deleteActor  from '@/components/DeleteActor';
import deleteMovie from '@/components/DeleteMovie';
export default {
  components: {deleteMovie, deleteActor},
  name: 'MovieDb',
  data() {
    return {
        showDelMv: '',
        showDelAct:'',
        showDelActMv:'',
    }
  },
  created() {
    this.ShowMovies();
    this.ShowActors();

  },
  computed: {
    ...mapState('movies', {allMovies: 'showMovies'}),
  },
  methods: {
      delAct(movieId, actorId){
        this.showDelAct = actorId;
        this.showDelActMv = movieId;
      },
      cacelel() {
        this.showDelMv= '';
        this.showDelAct='';
        this.showDelActMv='';
        this.ShowMovies();
      },
      delMv(movie){
        this.showDelMv= movie.movieId;
      },
      navigation(x) {
        this.$router.push({name:x});
      },
    ...mapActions('movies', ['ShowMovies']),
    ...mapActions('actors', ['ShowActors']),
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
  },
};
</script>

<style scoped>

</style>


