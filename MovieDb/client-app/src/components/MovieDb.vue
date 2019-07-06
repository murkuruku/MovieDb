<template>
  <div >
    <div class="navigation">
      <button  @click="navigation('AddMovie')">Add new movie</button>
      <button  @click="navigation('AddActor')">Add new actor</button>
      <input  type="text" v-model="search" placeholder="Search"/>
      <select  v-model="searchSelect" >
        <option value="title">Title</option>
        <option value="releasYear">Releas Date</option>
        <option value="genre">Genre</option>
        <option value="movieActors">Actor</option>
      </select>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Genre</th>
          <th></th>
          <th>Actors</th>
        </tr>
      </thead>
      <tbody v-for="(movie, index) in filterMovies" :key="index">
        <tr>
          <td>{{movie.title}}</td>
          <td>{{movie.releasYear}}</td>
          <td class="genre">
            <div>{{genre(movie.genre)}}</div>
          </td>
          <td>
            <router-link class="edit" :to="{name: 'EditMovie', params:{id: movie.movieId}}">edit</router-link>
            <button class="delete" @click="delMv(movie)">delete</button>
          </td>
          <td>
            <ul v-for="(actor, x) in actInMv(movie)" :key="x" class="actors">
              <div>{{actor.name}}</div>
              <router-link class="edit" :to="{name: 'EditActor', params:{id: actor.actorId}}" >edit</router-link>
              <button class="delete" @click="delAct(movie.movieId, actor.actorId)" >delete</button>
            </ul>
          </td>
        </tr>
        <tr v-if="movie.movieId == showDelMv">
          <td colspan="4">
            <deleteMovie  :Movie="movie" @canceled="cacelel"></deleteMovie>
          </td>
        </tr>
        <tr v-for="(actor, x) in actInMv(movie)" :key="x" >
          <td  v-if="movie.movieId == showDelActMv && actor.actorId == showDelAct" colspan="4">
           <deleteActor :Movie="movie" :Actor="actor"  @cancel="cacelel()" ></deleteActor>
          </td>
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
  computed: {
    ...mapState('movies', {allMovies: 'showMovies'}),
    ...mapState('actors', {allActors: 'actors'}),
    ...mapState('actors', {Actors: 'showActors'}),
    filterMovies(){
      switch(this.searchSelect) {
        case 'title':
          return this.allMovies.filter((movie) => movie.title.match(this.search));
        case 'releasYear':
          return this.allMovies.filter((movie) => movie.releasYear.toString().match(this.search));
        case 'genre':
          return this.allMovies.filter((movie) => this.genre(movie.genre).toLowerCase().match(this.search));
        case 'movieActors':
          let u =  this.Actors.filter(actor => actor.name.match(this.search)) ;
          let movies = [];
          for(let i = 0; i < u.length; i++){
            for(let j = 0; j < u[i].movieActors.length; j++){
              for(let k = 0; k < this.allMovies.length; k++ ){
                if(u[i].movieActors[j].movieId === this.allMovies[k].movieId) {
                  if(movies.find(movie => movie.movieId == this.allMovies[k].movieId) == null){
                    movies.push(this.allMovies[k]);
                  }
                }
              }
            }
          }
          if (this.search === ''){
            return this.allMovies
          } else{
            return movies
          };
        default:
          return this.allMovies;
      }
    },
  },
  data() {
    return {
        showDelMv: '',
        showDelAct:'',
        showDelActMv:'',
        search: '',
        searchSelect:'',
    }
  },
  created() {
    this.ShowMovies();
    this.ShowActors();
    this.AllActors();
  },
  methods: {
    actInMv(movie){
      let actors =[];
      for(let i = 0; i < movie.movieActors.length; i++) {
        for(let j = 0; j < this.allActors.length; j++){
          if(movie.movieActors[i].actorId == this.allActors[j].actorId ){
            actors.push(this.allActors[j]);
          }
        }
      }
      return actors;
    },
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
    ...mapActions('actors', ['ShowActors', 'AllActors']),
    genre(x) {
      switch(x) {
        case 1:
          return  "Action";
        case 2:
          return  "Fantasy";
        case 3:
            return  "Drame";
        default:
          return  "None";
      }
    },
  },
};
</script>

<style >
.group>*{
	border-radius:28px;
	border:2px solid #0e0f0f;
	display:inline-block;
	cursor:pointer;
	color:#0f0505d7;
	font-family:Arial;
	font-size:19px;
	padding:10px 36px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
  margin: 10px;
  display: inline-block;
}

.delete,.add{
   background-color:#f16a52;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:2px solid #f50707;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:10px 36px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
  margin: 10px;
}
.cancel{
   background-color:#f3ef1a;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:2px solid #f7f304;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:10px 36px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
  margin: 10px;
}
.error {
      border-color: #E84444;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(232,68,68,.6);
    }
.navigation >*,.edit {
	background-color:#44c767;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:2px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:10px 36px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
  margin: 10px;
}
.navigation>*:active,.navigation>*:focus,.delete:focus,.group>*:focus,.edit:focus,.cancel:focus{
  outline: none;
  position:relative;
	top:1px;
  box-decoration-break: none;
}
.table{
  width: 100%;
  border:#2f6627 solid;
  border-radius: 15px
}
.table>*{
 	font-family:Arial;
	font-size:19px;
}
.table td{
 text-align: center;
}
.genre>*{
  display: inline;
}


</style>


