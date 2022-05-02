<template>
  <div>
      <p v-for="item in fetchedJobs" v-bind:key="item.id">
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>{{ item.time_ago }} by {{ item.domain }}</small>
      </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
      ]),
  },   
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },

}
</script>

<style>

</style>