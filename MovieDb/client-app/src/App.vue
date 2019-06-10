<template>
  <div class="container">
    <router-link :to="{name: 'AddMovie'}">movie</router-link>
    <router-link :to="{name: 'AddActor'}">actor</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @import 'bootstrap';

</style>
