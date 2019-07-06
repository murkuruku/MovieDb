<template>
  <div>
    <h1>Add Actor</h1>
    <form>
      <div class="form-group">
        <label>Name</label>
        <input v-model="actor.name" type="text"  name="Name" v-validate="'required'"
        :class="{'form-control': true, 'error': errors.has('Name') }" />
        <span v-show="errors.has('Name')" class="text-danger">{{ errors.first('Name') }}</span>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input v-model="actor.age" type="age" name="Age" v-validate="'required|age:86'"
        :class="{'form-control': true, 'error': errors.has('Age') }"/>
        <span v-show="errors.has('Age')" class="text-danger">{{ errors.first('Age') }}</span>
      </div>
      <div class="form-group">
        <h2>Movies</h2>
        <div v-for="(movie, index) in selectedMovies" :key="index">
          <input type="checkbox" v-model="movie.selected" />
          <label for="checkbox">{{movie.title}}</label>
        </div>
      </div>
      <div class="btn btn-group-lg btn-danger" @click="addActor(actor)">Add Actor</div>
      <div class="btn btn-group-lg btn-primary" @click="navigation('MovieDb')">Cancel</div>
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

<style scoped>
.error {
      border-color: #E84444;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(232,68,68,.6);
    }
</style>
