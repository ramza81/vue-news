<template>
  <div>
      <div v-for="newItem in news" v-bind:key="newItem.id">{{ newItem.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      news: []
    }
  },
  created() {
    fetchNewsList()
    .then(response => this.news = response.data)
    .catch(error => console.log(error));
  }

}
</script>

<style>

</style>