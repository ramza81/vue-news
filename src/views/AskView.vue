<template>
  <div>
    <div v-for="ask in fetchedAsk" v-bind:key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // ask() {
    //   return this.$store.state.askes;
    // }
    // ...mapState({
    //   fetchedAsk: state => state.askes
    // }),
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    // }),
    ...mapGetters([
      'fetchedAsk'
      ]),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>