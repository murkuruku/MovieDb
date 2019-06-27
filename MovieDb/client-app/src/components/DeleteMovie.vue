<template>
  <div>
      <h2>Do you really want to delete {{Movie.movieTitle}}  ?</h2>
      <div>
        <div class="btn btn-danger" @click="deleteMv(Movie)">Yes</div>
        <div class="btn btn-primary" @click="cancel()"> No</div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'DeleteMovie',
    props: ['Movie'],
    methods: {
      cancel() {
        this.$emit('canceled');
      },
      ...mapActions('movies',['DeleteMovie']),
      deleteMv(Movie) {
        this.DeleteMovie(Movie);
      },
    },
  }
</script>

<style  scoped>

</style>
