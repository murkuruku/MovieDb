<template>
  <div>
    <h1>Add Actor</h1>
    <form>
      <div class="group">
        <label>Name</label>
        <input v-model="actor.name" type="text"  name="Name" v-validate="'required'"
        :class="{'error': errors.has('Name') }" />
        <span v-show="errors.has('Name')" class="text-danger">{{ errors.first('Name') }}</span>
      </div>
      <div class="group">
        <label>Age</label>
        <input v-model="actor.age" type="age" name="Age" v-validate="'required|age:86'"
        :class="{'error': errors.has('Age') }"/>
        <span v-show="errors.has('Age')" class="text-danger">{{ errors.first('Age') }}</span>
      </div>
      <h2>Movies</h2>
      <div class="group" v-for="(movie, index) in selectedMovies" :key="index">
          <input type="checkbox" :id="movie.id" v-model="movie.selected" />
          <label :for="movie.id">{{movie.title}}</label>
      </div>
      <button type="button" class="add" @click="addActor(actor)">Add Actor</button>
      <button type="button" class="cancel" @click="navigation('MovieDb')">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { CommonMethods} from '../mixins/CommonMethods'
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate)


export default {
  name: "AddActor",
  computed: {
    ...mapState("movies", { allMovies: "movies" }),
    ...mapGetters("movies", { selectedMovies: "selectedMovies" }),
    ...mapGetters("actors", { lastId: "lastId" })
  },
  data() {
    return {
      actor: {
        movieActors: []
      }
    };
  },
  mixins: [CommonMethods],
  created() {
    this.AllMovies();
    this.AllActors();
  },
  methods: {
    addActor(actor) {
      const movies = this.selectedObj(this.selectedMovies,this.allMovies);
      this.$validator.validateAll().then(results => {
        if(results){
          let self = this;
           var addActorPromise = new Promise(function(resolve, reject) {
             if (movies.length != 0) {
              self.AddActor(self.select(actor, self.lastId, movies));
            } else {
              self.AddActor(actor);
            }
            resolve();
            }
          );
          var showmovie = new Promise(function(resolve, reject){
            const a = self.ShowMovies();
            resolve(a);
            }
          );
          addActorPromise.then(()=>{showmovie.then(() =>{this.navigation('MovieDb')})});
        }
      })
    },
    ...mapActions("actors", ["AddActor", "AllActors"]),
    ...mapActions("movies", ["AllMovies", "ShowMovies"]),
  }
};
</script>

<style >

</style>
