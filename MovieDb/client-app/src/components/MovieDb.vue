<template>
  <div>
   <table class="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Release Date</th>
      <th>Genre</th>
      <th>Actors</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="(movie, index) in allMovies" :key="index">
      <td >{{movie.movieTitle}}</td>
      <td>{{movie.movieReleas}}</td>
      <td >{{genre(movie.movieGenre)}}</td>
      <td >
        <ul v-for="(actors, x) in movie.actors" :key="x">
        {{actors.name}}
        </ul>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MovieDb',
  data() {
    return {
      Genre: ''
    }

  },
  created() {
    this.ShowMovies();
  },
  computed: {
    ...mapState('movies', {allMovies: 'showMovies'}),
  },
  methods: {
    ...mapActions('movies', ['ShowMovies']),
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


