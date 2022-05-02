<template>
  <div>
      <div v-for="newItem in fetchedNews" v-bind:key="newItem.id">{{ newItem.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
      ]),
  },  
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
}
</script>

<style>

</style>