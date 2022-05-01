<template>
  <div>
    <div v-for="ask in askes" v-bind:key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      askes: []
    }
  },
  created() {
    fetchAskList()
    .then(response => this.askes = response.data)
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>