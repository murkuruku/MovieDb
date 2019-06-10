<template>
  <div>
      <form>
      <div class="form-group">
        <label >Name</label>
        <input v-model="Actor.Name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Releas Year</label>
        <input v-model="Actor.Age" type="number" class="form-control">
      </div>
      <div class="btn btn-group-lg btn-danger" @click="addActor(Actor)">
        submit
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddActor',
  data() {
    return {
      Actor: {
        Name: '',
        Age: '',
      },
    };
  },
  methods: {
    ...mapActions('actors', ['AddActor']),
    addActor(Actor) {
      this.AddActor(Actor);
    },
  },
};
</script>

<style >

</style>
