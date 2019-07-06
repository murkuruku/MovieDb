<template>
  <div>
      <h2>Do you really want to delete {{Movie.title}}  ?</h2>
      <div>
        <div class="del" @click="deleteMv(Movie)">Yes</div>
        <div class="cancel" @click="cancel()"> No</div>
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

<style>
.del{
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
</style>
