<template>
  <div>
    <h1>Edit Actor</h1>
    <form>
    <div class="group">
      <label >Name</label>
      <input v-model="actor.name" type="text" name="Name" v-validate="'required'" class="form-control"
      :class="{ 'error': errors.has('Name') }" />
      <span v-show="errors.has('Name')" class="text-danger">{{ errors.first('Name') }}</span>
    </div>
    <div class="group">
      <label>Age</label>
      <input name="Age" v-model="actor.age" type="age" class="form-control" v-validate="'required|age:86'"
      :class="{'form-control': true, 'error': errors.has('Age') }">
      <span v-show="errors.has('Age')" class="text-danger">{{ errors.first('Age') }}</span>
    </div>
    <h2>Movies</h2>
    <div class="group" v-for="(movie,x) in selectedMovies" :key="x">
      <input type="checkbox" :id="movie.id" :checked="movie.selected" v-model="movie.selected">
      <label :for="movie.id" >{{movie.title}}</label>
    </div>
    <button type="button" class="edit" @click="editAct(actor)">Edit Actor</button>
    <button type="button" class="cancel" @click="navigation('MovieDb')">Cancel</button>
  </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex';
import { CommonMethods } from '../mixins/CommonMethods';
import Vue from "vue";
import VeeValidate from "vee-validate";
import { Validator } from 'vee-validate';
Vue.use(VeeValidate)

export default {
  name: 'EditActor',
  computed: {
    ...mapState('actors',{ Actors: 'showActors'}),
    ...mapState('movies',{ allMovies: 'movies'}),
    act() {
      let act = this.Actors.find(actor => actor.actorId === this.$route.params.id);
      return act;
    },
    ...mapGetters('movies', {selectedMovies: 'selectedMovies'}),
  },
  data(){
    return {
      actor: {},
    };
  },
  mixins:[CommonMethods],
  created() {
    this.AllMovies();
  },
  beforeMount() {
    this.values();
  },
  beforeUpdate(){
    this.selectedMv();
  },
  methods: {
    editAct(actor){
      const movies = this.selectedObj(this.selectedMovies, this.allMovies);
      const actorId = this.actor.actorId -1;
      this.$validator.validateAll().then(results => {
        if(results){
          let self = this;
          var editActorPromise = new Promise(function(resolve, reject) {
          const a = self.EditActor(self.select(actor, actorId, movies));
          resolve(a);
          });
           editActorPromise.then(() => this.navigation('MovieDb'));
        }
      })
    },
    values() {
      this.actor.actorId = this.act.actorId;
      this.actor.name = this.act.name;
      this.actor.age = this.act.age;
      this.actor.movieActors = [];
    },
    ...mapActions('actors', ['EditActor']),
    ...mapActions('movies', ['AllMovies']),
    selectedMv(){
      for(let i =0; i< this.act.movieActors.length; i++){
        this.selectedMovies.forEach(mv => {
          if(this.act.movieActors[i].movieId === mv.id){
            mv.selected = true;
              }
            }
          );
        }
      },
  },
}
</script>

<style>

</style>
